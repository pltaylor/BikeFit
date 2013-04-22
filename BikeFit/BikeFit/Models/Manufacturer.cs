using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace BikeFit.Models
{
    public class Manufacturer
    {
        private ICollection<BikeModel> models;

        public Manufacturer()
        {
            ManufacturerID = Guid.NewGuid();
            models = new List<BikeModel>();
        }

        [Key]
        public Guid ManufacturerID { get; set; }

        public string Name { get; set; }

        public virtual ICollection<BikeModel> Models
        {
            get
            {
                return models;
            }
            set
            {
                models = value;
            }
        }
    }
}