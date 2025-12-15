using ShowZen.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace ShowZen.Permissions;

public class ShowZenPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ShowZenPermissions.GroupName);


        var booksPermission = myGroup.AddPermission(ShowZenPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(ShowZenPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(ShowZenPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(ShowZenPermissions.Books.Delete, L("Permission:Books.Delete"));

        // ShowZen Permissions
        var artistsPermission = myGroup.AddPermission(ShowZenPermissions.Artists.Default, L("Permission:Artists"));
        artistsPermission.AddChild(ShowZenPermissions.Artists.Create, L("Permission:Artists.Create"));
        artistsPermission.AddChild(ShowZenPermissions.Artists.Edit, L("Permission:Artists.Edit"));
        artistsPermission.AddChild(ShowZenPermissions.Artists.Delete, L("Permission:Artists.Delete"));

        var clientsPermission = myGroup.AddPermission(ShowZenPermissions.Clients.Default, L("Permission:Clients"));
        clientsPermission.AddChild(ShowZenPermissions.Clients.Create, L("Permission:Clients.Create"));
        clientsPermission.AddChild(ShowZenPermissions.Clients.Edit, L("Permission:Clients.Edit"));
        clientsPermission.AddChild(ShowZenPermissions.Clients.Delete, L("Permission:Clients.Delete"));

        var eventsPermission = myGroup.AddPermission(ShowZenPermissions.Events.Default, L("Permission:Events"));
        eventsPermission.AddChild(ShowZenPermissions.Events.Create, L("Permission:Events.Create"));
        eventsPermission.AddChild(ShowZenPermissions.Events.Edit, L("Permission:Events.Edit"));
        eventsPermission.AddChild(ShowZenPermissions.Events.Delete, L("Permission:Events.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ShowZenResource>(name);
    }
}
