using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using wmtrainer.Models;

namespace wmtrainer.Controllers
{
    public class GameScore
    {
        public int GameID { get; set; }
        public decimal Score { get; set; }
    }
    
    [Produces("application/json")]
    [Route("api/Score")]
    public class ScoreController : Controller
    {
        private GameDbContext _context;

        public ScoreController(GameDbContext context)
        {
            this._context = context;
        }

        // GET: api/Score
        [HttpGet]
        public IEnumerable<string> Get()
        {
            //var n = _context.Games.First();
            var n = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
            return new string[] { n != null ? n.Value : "not logged in" };
        }

        // GET: api/Score/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Score
        [HttpPost]
        public void Post([FromBody] GameScore value)
        {

        }
        
        // PUT: api/Score/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
