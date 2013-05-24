namespace BikeFit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddManufacturerIsActive : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Manufacturers", "IsActive", c => c.Boolean(nullable: false, defaultValue: true));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Manufacturers", "IsActive");
        }
    }
}
