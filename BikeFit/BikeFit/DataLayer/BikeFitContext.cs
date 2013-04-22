using System.Data.Entity;

using BikeFit.Models;

namespace BikeFit.DataLayer
{
    public class BikeFitContext : DbContext 
    {
        public DbSet<Manufacturer> Manufacturers { get; set; }

        public DbSet<BikeModel> BikeModels { get; set; }

        public DbSet<BikeSize> BikeSizes { get; set; }
    }
}