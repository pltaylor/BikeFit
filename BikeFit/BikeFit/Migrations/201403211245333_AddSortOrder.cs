namespace BikeFit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddSortOrder : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.BikeSizes", "SortOrder", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.BikeSizes", "SortOrder");
        }
    }
}
