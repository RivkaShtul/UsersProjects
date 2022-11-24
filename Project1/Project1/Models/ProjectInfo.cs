using System;
using System.Collections.Generic;

namespace Project1.Models
{
    public partial class ProjectInfo
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; } = null!;
        public int Score { get; set; }
        public int DurationInDays { get; set; }
        public int BugsCount { get; set; }
        public bool MadeDedline { get; set; }
    }
}
