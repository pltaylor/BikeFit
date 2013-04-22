using System;
using System.ComponentModel.DataAnnotations;

namespace BikeFit.Models
{
    public class BikeSize
    {
        [Key]
        public Guid SizeID { get; set; }

        public double Size { get; set; }

        public WheelSize WheelSize { get; set; } 

        public double HeadTubeAngle { get; set; }

        public double BBDrop { get; set; }

        public double HeadTubeLength { get; set; }

        public double FrontCenter { get; set; }

        public double RearCenter { get; set; }

        public double Stack { get; set; }

        public double Reach { get; set; }
    }
}