using System;
using System.Collections.Generic;

namespace BikeFit.Models
{
    public class BikeModel
    {
        private ICollection<BikeSizes> sizes;

        public BikeModel()
        {
            sizes = new List<BikeSizes>();
        }

        public Guid BikeModelID { get; set; }

        public string Name { get; set; }

        public DateTime ManufacturedStartDate { get; set; }

        public DateTime ManufacturedEndDate { get; set; }

        public virtual ICollection<BikeSizes> Sizes
        {
            get
            {
                return sizes;
            }
            set
            {
                sizes = value;
            }
        }
    }
}