using Microsoft.AspNetCore.Builder;
using ShowZen;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("ShowZen.csproj");
await builder.RunAbpModuleAsync<ShowZenTestModule>(applicationName: "ShowZen");
namespace ShowZen
{
    public partial class Program
    {
    }
}
