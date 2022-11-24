import request from "utils/request-axios";

 const login = (data) => request.post('/login', data);
 const getProjects = (token: string) => request.get('/getProjects', token);
//  const getProjects = (token: string) => request.get('/info', token);

export const requestAPI = {
    login,
    getProjects
}