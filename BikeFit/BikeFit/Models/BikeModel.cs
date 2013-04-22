using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BikeFit.Models
{
    public class BikeModel
    {
        private ICollection<BikeSize> sizes;

        public BikeModel()
        {
            sizes = new List<BikeSize>();
        }
        [Key]
        public Guid BikeModelID { get; set; }

        public string Name { get; set; }

        public DateTime ManufacturedStartDate { get; set; }

        public DateTime ManufacturedEndDate { get; set; }

        public virtual ICollection<BikeSize> Sizes
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