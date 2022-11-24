using System;
using System.Collections.Generic;

namespace Project1.Models
{
    public partial class PersonDetail
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Teams { get; set; } = null!;
        public DateTime JoinedAt { get; set; }
        public string Avatar { get; set; } = null!;
        public string? Token { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
