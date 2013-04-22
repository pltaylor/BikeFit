using System;
using System.Linq;

using BikeFit.Models;

namespace BikeFit.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DataLayer.BikeFitContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(DataLayer.BikeFitContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //


            context.Manufacturers.AddOrUpdate(
                p => p.Name, 
                new Manufacturer { ManufacturerID = new Guid("BB66B3AD-B5E5-4D69-8607-08F3D0CCB66A"), Name = "Cervelo" },
                new Manufacturer { ManufacturerID = new Guid("8F64969C-8578-4502-92A4-1B93D4DCDDCB"), Name = "Cannondale" },
                new Manufacturer { ManufacturerID = new Guid("E9281EDE-4EA4-415F-A7AA-9FF97C65C5DF"), Name = "Felt" },
                new Manufacturer { ManufacturerID = new Guid("F41C7D8D-E17D-43B0-BC60-636DE32838A0"), Name = "Kestral" },
                new Manufacturer { ManufacturerID = new Guid("4883FE87-10C7-4CED-A03D-5BA61A13F35B"), Name = "Specialized" },
                new Manufacturer { ManufacturerID = new Guid("A64C180D-BBD0-43C9-AEDC-1EFFB41262BF"), Name = "Trek" },
                new Manufacturer { ManufacturerID = new Guid("92689349-5BF9-4299-8155-D18812467169"), Name = "Quintana Roo" }
                );

            context.SaveChanges();

            context.BikeModels.AddOrUpdate(
                p => p.BikeModelID,
                new BikeModel { BikeModelID = new Guid("96405CFB-F4BE-4F87-9A14-8DA229FBABDB"), Name = "P2C", ManufacturedStartDate = new DateTime(1995, 1, 1), Manufacturer = context.Manufacturers.First(p => p.Name == "Cervelo") },
                new BikeModel { BikeModelID = new Guid("32F1B963-7608-4B5F-8F7C-FC4EC2399F4A"), Name = "P3C", ManufacturedStartDate = new DateTime(1995, 1, 1), Manufacturer = context.Manufacturers.First(p => p.Name == "Cervelo") },
                new BikeModel { BikeModelID = new Guid("90D28C45-0355-4B98-ADE8-51B809D74645"), Name = "Slice", ManufacturedStartDate = new DateTime(1995, 1, 1), Manufacturer = context.Manufacturers.First(p => p.Name == "Cannondale") },
                new BikeModel { BikeModelID = new Guid("5F079D5D-70BA-46DF-A3A1-BB38C500496E"), Name = "DA", ManufacturedStartDate = new DateTime(1995, 1, 1), Manufacturer = context.Manufacturers.First(p => p.Name == "Felt") }
                );

            context.SaveChanges();
        }
    }
}
