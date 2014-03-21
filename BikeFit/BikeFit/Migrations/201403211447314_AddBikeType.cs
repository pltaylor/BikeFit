namespace BikeFit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddBikeType : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BikeTypes",
                c => new
                    {
                        BikeTypeId = c.Int(nullable: false, identity: true),
                        Type = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.BikeTypeId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.BikeTypes");
        }
    }
}
