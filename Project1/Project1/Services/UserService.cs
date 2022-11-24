using Project1.Models;
using Project1.Services;

namespace Project1
{
    public class UserService : IUserService
    {
        public UserService()
        {
        }

        public PersonDetail GetUserByEmailAndPassword(string email, string password)
        {
            using (var dbContext = new dbContext())
            {
                return dbContext.PersonDetails.FirstOrDefault(p => p.Email == email && p.Password == password);
            }
        }

        public List<ProjectInfo> GetProjectsOfUser(string token)
        {
            using (var dbContext = new dbContext())
            {
                var user = dbContext.PersonDetails.FirstOrDefault(p => p.Token == token);
                try
                {

                    return dbContext.ProjectInfos.Where(p => p.UserId == user.Id).ToList();
                }
                catch (Exception ex)
                {
                    throw new HttpRequestException(ex.Message);
                }
            }
        }

        public void UpdateTokenByUseId(int userId, string token)
        {
            using (var dbContext = new dbContext())
            {
                var user = dbContext.PersonDetails.FirstOrDefault(p => p.Id == userId);
                if (user != null)
                {
                    user.Token = token;
                    dbContext.SaveChanges();
                }
            }
        }
    }
}