using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;

namespace ShowZen.HealthChecks;

public static class HealthChecksBuilderExtensions
{
    public static void AddShowZenHealthChecks(this IServiceCollection services)
    {
        // Add your health checks here
        var healthChecksBuilder = services.AddHealthChecks();
        healthChecksBuilder.AddCheck<ShowZenDatabaseCheck>("ShowZen DbContext Check", tags: new string[] { "database" });

        var configuration = services.GetConfiguration();
        var healthCheckUrl = configuration["App:HealthCheckUrl"];

        if (string.IsNullOrEmpty(healthCheckUrl))
        {
            healthCheckUrl = "/health-status";
        }
        
        services.ConfigureHealthCheckEndpoint("/health-status");

        var healthChecksUiBuilder = services.AddHealthChecksUI(settings =>
        {
            // HealthChecks UI needs an absolute URL and cannot use 0.0.0.0
            // Use localhost for local health check monitoring
            var selfUrl = configuration["App:SelfUrl"]?.RemovePostFix("/") ?? "http://localhost:5000";
            var healthCheckEndpoint = string.IsNullOrEmpty(healthCheckUrl) || healthCheckUrl.StartsWith("/")
                ? $"{selfUrl}{healthCheckUrl}"
                : healthCheckUrl;
            
            settings.AddHealthCheckEndpoint("ShowZen Health Status", healthCheckEndpoint);
        });

        // Set your HealthCheck UI Storage here
        healthChecksUiBuilder.AddInMemoryStorage();

        services.MapHealthChecksUiEndpoints(options =>
        {
            options.UIPath = "/health-ui";
            options.ApiPath = "/health-api";
        });
    }

    private static IServiceCollection ConfigureHealthCheckEndpoint(this IServiceCollection services, string path)
    {
        services.Configure<AbpEndpointRouterOptions>(options =>
        {
            options.EndpointConfigureActions.Add(endpointContext =>
            {
                endpointContext.Endpoints.MapHealthChecks(
                    new PathString(path.EnsureStartsWith('/')),
                    new HealthCheckOptions
                    {
                        Predicate = _ => true,
                        ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                        AllowCachingResponses = false,
                    });
            });
        });

        return services;
    }

    private static IServiceCollection MapHealthChecksUiEndpoints(this IServiceCollection services, Action<global::HealthChecks.UI.Configuration.Options>? setupOption = null)
    {
        services.Configure<AbpEndpointRouterOptions>(routerOptions =>
        {
            routerOptions.EndpointConfigureActions.Add(endpointContext =>
            {
                endpointContext.Endpoints.MapHealthChecksUI(setupOption);
            });
        });

        return services;
    }
}
