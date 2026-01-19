using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ShowZen.Data;
using Volo.Abp;

namespace ShowZen
{
    /// <summary>
    /// Utility class to cleanup database - removes all data except Artists and Users
    /// Run with: dotnet run --CleanupDatabase
    /// </summary>
    public static class CleanupDatabase
    {
        public static async Task RunAsync(IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var cleanupService = scope.ServiceProvider.GetRequiredService<DatabaseCleanupService>();
                
                Console.WriteLine("========================================");
                Console.WriteLine("DATABASE CLEANUP UTILITY");
                Console.WriteLine("========================================");
                Console.WriteLine("This will DELETE the following data:");
                Console.WriteLine("- All Events");
                Console.WriteLine("- All Clients");
                Console.WriteLine("- All Local Partners");
                Console.WriteLine("- All Locations");
                Console.WriteLine("- All Proposals");
                Console.WriteLine();
                Console.WriteLine("The following will be PRESERVED:");
                Console.WriteLine("- All Artists");
                Console.WriteLine("- All Users");
                Console.WriteLine("- All Roles");
                Console.WriteLine("========================================");
                Console.WriteLine();
                Console.Write("Are you sure you want to continue? (yes/no): ");
                
                var confirmation = Console.ReadLine();
                
                if (confirmation?.ToLower() == "yes")
                {
                    Console.WriteLine();
                    Console.WriteLine("Starting cleanup...");
                    await cleanupService.CleanupDatabaseAsync();
                    Console.WriteLine();
                    Console.WriteLine("✓ Cleanup completed successfully!");
                }
                else
                {
                    Console.WriteLine("Cleanup cancelled.");
                }
            }
        }
    }
}
