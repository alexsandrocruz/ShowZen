using Volo.Abp.Application.Services;
using ShowZen.Localization;

namespace ShowZen.Services;

/* Inherit your application services from this class. */
public abstract class ShowZenAppService : ApplicationService
{
    protected ShowZenAppService()
    {
        LocalizationResource = typeof(ShowZenResource);
    }
}