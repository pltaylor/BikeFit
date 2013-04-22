namespace BikeFit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Manufacturers",
                c => new
                    {
                        ManufacturerID = c.Guid(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ManufacturerID);
            
            CreateTable(
                "dbo.BikeModels",
                c => new
                    {
                        BikeModelID = c.Guid(nullable: false),
                        Name = c.String(),
                        ManufacturedStartDate = c.DateTime(nullable: false),
                        ManufacturedEndDate = c.DateTime(nullable: false),
                        Manufacturer_ManufacturerID = c.Guid(),
                    })
                .PrimaryKey(t => t.BikeModelID)
                .ForeignKey("dbo.Manufacturers", t => t.Manufacturer_ManufacturerID)
                .Index(t => t.Manufacturer_ManufacturerID);
            
            CreateTable(
                "dbo.BikeSizes",
                c => new
                    {
                        SizeID = c.Guid(nullable: false),
                        Size = c.Double(nullable: false),
                        WheelSize = c.Int(nullable: false),
                        HeadTubeAngle = c.Double(nullable: false),
                        BBDrop = c.Double(nullable: false),
                        HeadTubeLength = c.Double(nullable: false),
                        FrontCenter = c.Double(nullable: false),
                        RearCenter = c.Double(nullable: false),
                        Stack = c.Double(nullable: false),
                        Reach = c.Double(nullable: false),
                        BikeModel_BikeModelID = c.Guid(),
                    })
                .PrimaryKey(t => t.SizeID)
                .ForeignKey("dbo.BikeModels", t => t.BikeModel_BikeModelID)
                .Index(t => t.BikeModel_BikeModelID);
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.BikeSizes", new[] { "BikeModel_BikeModelID" });
            DropIndex("dbo.BikeModels", new[] { "Manufacturer_ManufacturerID" });
            DropForeignKey("dbo.BikeSizes", "BikeModel_BikeModelID", "dbo.BikeModels");
            DropForeignKey("dbo.BikeModels", "Manufacturer_ManufacturerID", "dbo.Manufacturers");
            DropTable("dbo.BikeSizes");
            DropTable("dbo.BikeModels");
            DropTable("dbo.Manufacturers");
        }
    }
}
