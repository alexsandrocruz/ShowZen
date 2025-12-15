using Microsoft.Extensions.Localization;
using ShowZen.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ShowZen;

[Dependency(ReplaceServices = true)]
public class ShowZenBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<ShowZenResource> _localizer;

    public ShowZenBrandingProvider(IStringLocalizer<ShowZenResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}