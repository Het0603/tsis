import { sgiApiClient } from "../../sgiApiClient";

export default {
  getAll,
  currentCourse,
  allCourse,
  create,
  update,
  deleteCoures,
  get,
};

async function getAll(qParams = {}) {
  const url = "/courses";

  const response = await sgiApiClient.get(url, { qParams });

  return response.data || [];
}
async function currentCourse(qParams = {}) {
  const url = "/courses";

  const response = await sgiApiClient.get(url, { qParams });
  const data = response.data?.filter((obj) => obj.active === true);

  return data || [];
}
async function allCourse(qParams = {}) {
  const url = "/courses";

  const response = await sgiApiClient.get(url, { qParams });

  const data = response.data?.filter((obj) => obj.active === false);
  return data || [];
}

async function create(body) {
  const url = "/course";

  const response = await sgiApiClient.post(url, body);

  return response.data;
}

async function update(id, data) {
  const url = `/course/${id}`;

  const response = await sgiApiClient.patch(url, data);

  return response.data;
}
async function deleteCoures(id, data) {
  const url = `/course/${id}`;

  return await sgiApiClient.delete(url, data);
}
async function get(id) {
  const url = `/course/${id}`;

  const response = await sgiApiClient.get(url);

  return response.data;
}
