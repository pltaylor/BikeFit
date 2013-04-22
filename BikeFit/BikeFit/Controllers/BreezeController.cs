using System.Linq;
using System.Web.Http;

using BikeFit.DataLayer;
using BikeFit.Models;

using Breeze.WebApi;

namespace BikeFit.Controllers
{
    [BreezeController]
    public class BreezeController : ApiController
    {
        readonly EFContextProvider<BikeFitContext> contextProvider = new EFContextProvider<BikeFitContext>();

        [HttpGet]
        public string Metadata()
        {
            return contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<Manufacturer> Manufacturers()
        {
            return contextProvider.Context.Manufacturers;
        }

        [HttpGet]
        public IQueryable<BikeModel> BikeModels()
        {
            return contextProvider.Context.BikeModels;
        }

        [HttpGet]
        public IQueryable<BikeSize> BikeSizes()
        {
            return contextProvider.Context.BikeSizes;
        }

    }
}
