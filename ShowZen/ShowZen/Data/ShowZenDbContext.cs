using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using ShowZen.Entities.Books;
using ShowZen.Entities.Artists;
using ShowZen.Entities.Clients;
using ShowZen.Entities.Events;
using ShowZen.Entities.Proposals;


namespace ShowZen.Data;

public class ShowZenDbContext : AbpDbContext<ShowZenDbContext>
{
    public DbSet<Book> Books { get; set; }
    
    // Artists Module
    public DbSet<Artist> Artists { get; set; }
    public DbSet<ArtistSpecialty> ArtistSpecialties { get; set; }
    public DbSet<Availability> Availabilities { get; set; }
    
    // Clients Module
    public DbSet<Client> Clients { get; set; }
    
    // Events Module
    public DbSet<Event> Events { get; set; }
    public DbSet<Location> Locations { get; set; }
    public DbSet<EventCommission> EventCommissions { get; set; }
    
    // Proposals Module
    public DbSet<Proposal> Proposals { get; set; }
    public DbSet<ProposalView> ProposalViews { get; set; }
    
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public ShowZenDbContext(DbContextOptions<ShowZenDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureFeatureManagement();
        builder.ConfigurePermissionManagement();
        builder.ConfigureBlobStoring();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureTenantManagement();
        
        builder.Entity<Book>(b =>
        {
            b.ToTable(DbTablePrefix + "Books",
                DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
        });
        
        /* Configure ShowZen entities */
        
        // Artists Module
        builder.Entity<Artist>(b =>
        {
            b.ToTable(DbTablePrefix + "Artists", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Name).IsRequired().HasMaxLength(200);
            b.Property(x => x.Biography).IsRequired().HasMaxLength(2000);
            b.Property(x => x.InstagramHandle).HasMaxLength(100);
            b.Property(x => x.WebsiteUrl).HasMaxLength(500);
            b.Property(x => x.DefaultTaxPercentage).HasColumnType("decimal(18,2)");
            
            b.HasIndex(x => x.TenantId);
            b.HasIndex(x => x.Name);
            
            b.HasMany(x => x.Specialties)
                .WithOne(x => x.Artist)
                .HasForeignKey(x => x.ArtistId)
                .OnDelete(DeleteBehavior.Cascade);
                
            b.HasMany(x => x.Availabilities)
                .WithOne(x => x.Artist)
                .HasForeignKey(x => x.ArtistId)
                .OnDelete(DeleteBehavior.Cascade);
        });
        
        builder.Entity<ArtistSpecialty>(b =>
        {
            b.ToTable(DbTablePrefix + "ArtistSpecialties", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Name).IsRequired().HasMaxLength(100);
            b.Property(x => x.Description).HasMaxLength(500);
            
            b.HasIndex(x => x.ArtistId);
        });
        
        builder.Entity<Availability>(b =>
        {
            b.ToTable(DbTablePrefix + "Availabilities", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Notes).HasMaxLength(1000);
            
            b.HasIndex(x => x.TenantId);
            b.HasIndex(x => x.ArtistId);
            b.HasIndex(x => new { x.ArtistId, x.StartDate, x.EndDate });
        });
        
        // Clients Module
        builder.Entity<Client>(b =>
        {
            b.ToTable(DbTablePrefix + "Clients", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Name).IsRequired().HasMaxLength(200);
            b.Property(x => x.Document).HasMaxLength(50);
            b.Property(x => x.Email).HasMaxLength(256);
            b.Property(x => x.Phone).HasMaxLength(50);
            b.Property(x => x.Address).HasMaxLength(500);
            b.Property(x => x.City).HasMaxLength(100);
            b.Property(x => x.State).HasMaxLength(2);
            b.Property(x => x.Notes).HasMaxLength(2000);
            
            b.HasIndex(x => x.TenantId);
            b.HasIndex(x => x.Name);
            b.HasIndex(x => x.LeadStatus);
        });
        
        // Events Module
        builder.Entity<Location>(b =>
        {
            b.ToTable(DbTablePrefix + "Locations", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Name).IsRequired().HasMaxLength(200);
            b.Property(x => x.Address).IsRequired().HasMaxLength(500);
            b.Property(x => x.City).IsRequired().HasMaxLength(100);
            b.Property(x => x.State).IsRequired().HasMaxLength(2);
            b.Property(x => x.ZipCode).HasMaxLength(20);
            b.Property(x => x.Capacity).HasMaxLength(50);
            b.Property(x => x.Notes).HasMaxLength(1000);
            
            b.HasIndex(x => x.TenantId);
        });
        
        builder.Entity<Event>(b =>
        {
            b.ToTable(DbTablePrefix + "Events", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Title).IsRequired().HasMaxLength(200);
            b.Property(x => x.Description).HasMaxLength(2000);
            b.Property(x => x.Notes).HasMaxLength(2000);
            b.Property(x => x.Fee).HasColumnType("decimal(18,2)");
            b.Property(x => x.ProductionValue).HasColumnType("decimal(18,2)");
            b.Property(x => x.ProductionPercentage).HasColumnType("decimal(18,2)");
            b.Property(x => x.GuaranteeValue).HasColumnType("decimal(18,2)");
            b.Property(x => x.TicketPercentage).HasColumnType("decimal(18,2)");
            b.Property(x => x.DiscountValue).HasColumnType("decimal(18,2)");
            b.Property(x => x.TaxValue).HasColumnType("decimal(18,2)");
            b.Property(x => x.TaxPercentage).HasColumnType("decimal(18,2)");
            
            b.HasIndex(x => x.TenantId);
            b.HasIndex(x => x.ArtistId);
            b.HasIndex(x => x.ClientId);
            b.HasIndex(x => x.Status);
            b.HasIndex(x => new { x.ArtistId, x.StartDateTime });
            
            b.HasOne(x => x.Artist)
                .WithMany()
                .HasForeignKey(x => x.ArtistId)
                .OnDelete(DeleteBehavior.Restrict);
                
            b.HasOne(x => x.Client)
                .WithMany()
                .HasForeignKey(x => x.ClientId)
                .OnDelete(DeleteBehavior.Restrict);
                
            b.HasOne(x => x.Location)
                .WithMany()
                .HasForeignKey(x => x.LocationId)
                .OnDelete(DeleteBehavior.Restrict);
                
            b.HasOne(x => x.LocalPartner)
                .WithMany()
                .HasForeignKey(x => x.LocalPartnerId)
                .OnDelete(DeleteBehavior.Restrict);
                
            b.HasMany(x => x.Commissions)
                .WithOne(x => x.Event)
                .HasForeignKey(x => x.EventId)
                .OnDelete(DeleteBehavior.Cascade);
        });
        
        builder.Entity<EventCommission>(b =>
        {
            b.ToTable(DbTablePrefix + "EventCommissions", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Description).IsRequired().HasMaxLength(200);
            b.Property(x => x.Value).HasColumnType("decimal(18,2)");
            b.Property(x => x.Percentage).HasColumnType("decimal(18,2)");
            
            b.HasIndex(x => x.EventId);
        });
        
        // Proposals Module
        builder.Entity<Proposal>(b =>
        {
            b.ToTable(DbTablePrefix + "Proposals", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.UniqueToken).IsRequired().HasMaxLength(100);
            b.Property(x => x.PdfPath).HasMaxLength(500);
            
            b.HasIndex(x => x.UniqueToken).IsUnique();
            b.HasIndex(x => x.EventId);
            b.HasIndex(x => x.Status);
            
            b.HasOne(x => x.Event)
                .WithMany()
                .HasForeignKey(x => x.EventId)
                .OnDelete(DeleteBehavior.Restrict);
        });
        
        builder.Entity<ProposalView>(b =>
        {
            b.ToTable(DbTablePrefix + "ProposalViews", DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.IpAddress).HasMaxLength(50);
            b.Property(x => x.UserAgent).HasMaxLength(500);
            
            b.HasIndex(x => x.ProposalId);
            b.HasIndex(x => x.ViewedAt);
            
            b.HasOne(x => x.Proposal)
                .WithMany()
                .HasForeignKey(x => x.ProposalId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}

