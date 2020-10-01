using System.Threading.Tasks;
using AutoMapper;
using KeepSpy.App.Abstraction;
using KeepSpy.Domain;
using KeepSpy.Storage;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KeepSpy.App.Controllers
{
    
    [Route("api/[controller]")]
    public class NetworkController: BaseController
    {
        public NetworkController(KeepSpyContext db, IMapper mapper) : base(db, mapper)
        {
        }

        [HttpGet]
        public Task<Network[]> Get() => Db.Set<Network>().ToArrayAsync();

    }
}