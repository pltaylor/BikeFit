using BikeFit.Models;

namespace BikeFit.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<BikeFit.DataLayer.BikeFitContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(DataLayer.BikeFitContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Manufacturers.AddOrUpdate(
                p => p.Name,
                new Manufacturer { Name = "Cervelo" },
                new Manufacturer { Name = "Cannondale" },
                new Manufacturer { Name = "Felt" },
                new Manufacturer { Name = "Kestral" },
                new Manufacturer { Name = "Specialized" },
                new Manufacturer { Name = "Trek" },
                new Manufacturer { Name = "Quintana Roo" });
        }
    }
}
