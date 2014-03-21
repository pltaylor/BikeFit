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
            
            AddColumn("dbo.BikeModels", "TypeID", c => c.Int(nullable: false));
            CreateIndex("dbo.BikeModels", "TypeID");
            AddForeignKey("dbo.BikeModels", "TypeID", "dbo.BikeTypes", "BikeTypeId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.BikeModels", "TypeID", "dbo.BikeTypes");
            DropIndex("dbo.BikeModels", new[] { "TypeID" });
            DropColumn("dbo.BikeModels", "TypeID");
            DropTable("dbo.BikeTypes");
        }
    }
}
