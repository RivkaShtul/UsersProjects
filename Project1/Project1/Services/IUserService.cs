using Project1.Models;

namespace Project1.Services
{
    public interface IUserService
    {
        PersonDetail GetUserByEmailAndPassword(string email, string password);
        List<ProjectInfo> GetProjectsOfUser(string token);
        public void UpdateTokenByUseId(int userId, string token);
    }
}
