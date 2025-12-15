using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ShowZen.Data;

public class ShowZenDbContextFactory : IDesignTimeDbContextFactory<ShowZenDbContext>
{
    public ShowZenDbContext CreateDbContext(string[] args)
    {
        ShowZenGlobalFeatureConfigurator.Configure();
        ShowZenModuleExtensionConfigurator.Configure();

        // https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        
        ShowZenEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ShowZenDbContext>()
            .UseNpgsql(configuration.GetConnectionString("Default"));

        return new ShowZenDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables();

        return builder.Build();
    }
}