import axiosClient from "./index";

const userAPI = {
  login: async (email: string, password: string) => {
    const response = await axiosClient.post(
      "http://43.201.30.126:8080/api/user/login",
      {
        email: email,
        password: password,
      }
    );
    return response;
  },
  logout: async () => {
    const response = await axiosClient.get(
      "http://43.201.30.126:8080/api/user/logout"
    );
    return response;
  },
};

export default userAPI;
