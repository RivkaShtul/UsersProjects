namespace Project1.DTO
{
    public class UserDTO
    {
        public string Token { get; set; }
        public UserDetails UserDetails { get; set; }
    }

    public class UserDetails
    {
        public string Name { get; set; }
        public string Teams { get; set; }
        public DateTime JoinedAt { get; set; }
        public string Avatar { get; set; }
    }

    public class ProjectInfoDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Score { get; set; }
        public int DurationInDays { get; set; }
        public int BugsCount { get; set; }
        public bool MadeDedline { get; set; }
    }
}
