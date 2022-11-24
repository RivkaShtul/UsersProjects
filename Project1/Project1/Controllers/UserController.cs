using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Project1.DTO;
using Project1.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Project1.Controllers
{
    [ApiController]
    [Route("api")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;

        public UserController(ILogger<UserController> logger, IConfiguration configuration, IUserService userService)
        {
            (_logger, _configuration, _userService) = (logger, configuration, userService);
        }

        private string GenerateJSONWebToken()
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                                             _configuration["Jwt:Issuer"],
                                             null,
                                             expires: DateTime.Now.AddMinutes(120),
                                             signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost]
        [Route("login")]
        public UserDTO Login([FromBody] LoginReqParams loginReqParams)
        {
            try
            {
                var user = _userService.GetUserByEmailAndPassword(loginReqParams.Email, loginReqParams.Password);
                if (user == null)
                {
                    throw new HttpRequestException("not valid user");
                }
                string token = GenerateJSONWebToken();
                _userService.UpdateTokenByUseId(user.Id, token);
                return new UserDTO()
                {
                    Token = token,
                    UserDetails = new UserDetails()
                    {
                        Name = user.Name,
                        Teams = user.Teams,
                        JoinedAt = user.JoinedAt,
                        Avatar = user.Avatar
                    }
                };
            }
            catch (Exception ex)
            {
                throw new HttpRequestException(ex.Message);
            }
        }

        [HttpGet]
        [Authorize]
        [Route("getProjects")]
        public List<ProjectInfoDTO> GetProjects()
        {
            var _bearer_token = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
            var projectList = new List<ProjectInfoDTO>();
            var projects = _userService.GetProjectsOfUser(_bearer_token);
            projects.ForEach(project =>
            {
                projectList.Add(new ProjectInfoDTO()
                {
                    BugsCount = project.BugsCount,
                    DurationInDays = project.DurationInDays,
                    Id = project.Id,
                    MadeDedline = project.MadeDedline,
                    Name = project.Name,
                    Score = project.Score
                });
            });

            return projectList;
        }
    }
}