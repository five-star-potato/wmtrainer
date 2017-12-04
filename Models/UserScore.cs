using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace wmtrainer.Models
{
    public class UserScore
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public String UserId { get; set; }
        public int GameId { get; set; }
        public DateTime CreatedDt { get; set; }
        public decimal Score { get; set; }
    }
}
