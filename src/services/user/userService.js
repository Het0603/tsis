import { headers, sgiApiClient } from "../sgiApiClient";

const UserService = {
  auth: async (data) => {
    return sgiApiClient.post("/auth", data);
  },

  create: async (data) => {
    return await sgiApiClient.post("/account/staff", data, {
      headers: headers,
    });
  },
  getUse: async (id, params) => {
    const url = `/user/${id}`;
    const res = await sgiApiClient.get(url, { params });
    return res.data;
  },
  verifyToken: async () => {
    const url = `/verify-token`;
    const res = await sgiApiClient.get(url);
    return res;
  },
};

export default UserService;
