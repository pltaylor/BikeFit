using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BikeFit.Models
{
    public class Manufacturer
    {
        private ICollection<BikeModel> models;

        public Manufacturer()
        {
            models = new List<BikeModel>();
        }

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