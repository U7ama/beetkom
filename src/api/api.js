import axios from "axios";
export const loginApi = (email, password) => {
  return axios.post("https://api.beetkom.org/api/auth/login", {
    email,
    password,
  });
};
export const getTableDataSearch = () => {
  return axios.get("https://api.beetkom.org/api/read/Users");
};

export const getProperties = () => {
  return axios.get("https://api.beetkom.org/api/read/Properties");
};
export const GetReviews = (property_id) => {
  return axios.get(
    `https://api.beetkom.org/api/read/getAllRatings?property_id=${property_id}`
  );
};

export const deleteUser = (userId) => {
  return axios.delete(`https://api.beetkom.org/api/delete/user/${userId}`);
};
export const deleteProperties = (userId) => {
  return axios.delete(
    `https://api.beetkom.org/api/delete/Properties/${userId}`
  );
};
export const updateProperties = (userId) => {
  return axios.put(`https://api.beetkom.org/api/update/Properties/${userId}`);
};

export const addDataApi = (data) => {
  return axios.post("https://api.beetkom.org/api/write/Properties", data);
};
