using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace ShowZen.Data;

public class ShowZenDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public ShowZenDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the ShowZenDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ShowZenDbContext>()
            .Database
            .MigrateAsync();

    }
}
