namespace BikeFit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Reset : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BikeModels",
                c => new
                    {
                        BikeModelID = c.Guid(nullable: false),
                        ManufactuerID = c.Guid(nullable: false),
                        Name = c.String(),
                        ManufacturedStartDate = c.DateTime(nullable: false, storeType: "date"),
                        ManufacturedEndDate = c.DateTime(nullable: false, storeType: "date"),
                    })
                .PrimaryKey(t => t.BikeModelID)
                .ForeignKey("dbo.Manufacturers", t => t.ManufactuerID, cascadeDelete: true)
                .Index(t => t.ManufactuerID);
            
            CreateTable(
                "dbo.Manufacturers",
                c => new
                    {
                        ManufacturerID = c.Guid(nullable: false),
                        Name = c.String(),
                        IsActive = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ManufacturerID);
            
            CreateTable(
                "dbo.BikeSizes",
                c => new
                    {
                        SizeID = c.Guid(nullable: false),
                        BikeModelID = c.Guid(nullable: false),
                        SortOrder = c.Int(nullable: false),
                        Size = c.String(),
                        WheelSize = c.Int(nullable: false),
                        HeadTubeAngle = c.Double(nullable: false),
                        BottomBracketDrop = c.Double(nullable: false),
                        HeadTubeLength = c.Double(nullable: false),
                        FrontCenter = c.Double(nullable: false),
                        RearCenter = c.Double(nullable: false),
                        Stack = c.Double(nullable: false),
                        Reach = c.Double(nullable: false),
                        MaxSeatAngle = c.Double(nullable: false),
                        MinSeatAngle = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.SizeID)
                .ForeignKey("dbo.BikeModels", t => t.BikeModelID, cascadeDelete: true)
                .Index(t => t.BikeModelID);
            
            CreateTable(
                "dbo.BikeTypes",
                c => new
                    {
                        BikeTypeId = c.Int(nullable: false, identity: true),
                        Type = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.BikeTypeId);
            
            CreateTable(
                "dbo.UserProfile",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.BikeSizes", "BikeModelID", "dbo.BikeModels");
            DropForeignKey("dbo.BikeModels", "ManufactuerID", "dbo.Manufacturers");
            DropIndex("dbo.BikeSizes", new[] { "BikeModelID" });
            DropIndex("dbo.BikeModels", new[] { "ManufactuerID" });
            DropTable("dbo.UserProfile");
            DropTable("dbo.BikeTypes");
            DropTable("dbo.BikeSizes");
            DropTable("dbo.Manufacturers");
            DropTable("dbo.BikeModels");
        }
    }
}
