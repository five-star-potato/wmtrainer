using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace wmtrainer.Models
{
    public class GameDbContext: DbContext
    {
        public GameDbContext(DbContextOptions<GameDbContext> options) : base(options)
        {
        }

        public DbSet<Game> Games { get; set; }
        public DbSet<UserPreference> UserPreferences { get; set; }
        public DbSet<UserScore> UserScores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().ToTable("Game");
            modelBuilder.Entity<UserPreference>().ToTable("UserPreference");
            modelBuilder.Entity<UserScore>().ToTable("UserScore");
        }
    }
}
