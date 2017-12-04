using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace wmtrainer.Models
{
    public class DbInitializer
    {
        public static void Initialize(GameDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Games.Any())
            {
                return;   // DB has been seeded
            }

            var games = new Game[]
            {
            new Game{Name="n-back"}
            };
            foreach (var g in games)
            {
                context.Games.Add(g);
            }
            context.SaveChanges();
        }
    }
}
