import { sgiApiClient } from "../sgiApiClient";

export default {
  getAll,
  get,
  create,
  update,
  deleteAdmission,
  createDocument,
  updateDocument,
  deleteDocument,
  getByGRNo,
};

async function getAll(params = {}) {
  const url = `/admissions`;
  const response = await sgiApiClient.get(url, { params });
  return response.data;
}

async function get(id) {
  const url = `/admission/${id}`;
  const response = await sgiApiClient.get(url);

  return response.data;
}

async function create(body) {
  const url = "/admission";
  const res = await sgiApiClient.post(url, body);
  return res.data;
}

async function update(id, data) {
  const url = `/admission/${id}`;
  const response = await sgiApiClient.patch(url, data);
  return response.data;
}

async function deleteAdmission(id, data) {
  const url = `/admission/${id}`;

  const response = await sgiApiClient.delete(url, data);
  return response.data;
}

async function getByGRNo(gr_number) {
  const url = `/admission?gr_number=${gr_number}`;

  return await sgiApiClient.get(url);
}

async function createDocument(data) {
  const url = `/student-document`;

  return await sgiApiClient.post(url, data);
}
async function updateDocument(id, data) {
  const url = `/student-document/${id}`;

  return await sgiApiClient.patch(url, data);
}
async function deleteDocument(id, data) {
  const url = `/student-document/${id}`;

  return await sgiApiClient.delete(url, data);
}
