import axios from './axiosInstance';

// A cada petición nueva que se haga colocarle el credentials TRUE


export const registerReq =(user) =>axios.post(`/register`,user)
export const loginReq = (user) => axios.post(`/login`, user)
export const verifyTokenRequest = () => { return axios.get(`/verify`,);};
export const logoutRequest = () => {return axios.post(`/logout`,)}
export const getProfileRequest = () => {return axios.get(`/profile`)}
export const getAllUserRequest = () => {return axios.get(`/admin/users`)}
export const updateUserDataRequest = (data) => {return axios.put(`/users`, data, {
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})};
export const adminupdateUserDataRequest = (id,data) => {return axios.put(`admin/users/${id}`, data)};
export const deleteUserRequest = (id) => {return axios.delete(`/admin/users/${id}`)}
  