namespace ShowZen.Permissions;

public static class ShowZenPermissions
{
    public const string GroupName = "ShowZen";


    public static class Books
    {
        public const string Default = GroupName + ".Books";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    // ShowZen Permissions
    public static class Artists
    {
        public const string Default = GroupName + ".Artists";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class Clients
    {
        public const string Default = GroupName + ".Clients";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class Events
    {
        public const string Default = GroupName + ".Events";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
