import { sgiApiClient } from "../../sgiApiClient";

export default {
  getAll,
  create,
  get,
  update,
  createInstallment,
  updateInstallment,
  getAllFeesType,
  createFeesType,
  updateFeesType,
  deleteFeesType,
};

async function getAll(params = {}) {
  const url = "/student-fees";

  const response = await sgiApiClient.get(url, { params });

  return response.data;
}

async function create(body) {
  const url = "/accept-student-fees";

  const res = await sgiApiClient.post(url, body);

  return res.data;
}

async function get(id, params = {}) {
  const url = `/get-fee-transaction/${id}`;

  const response = await sgiApiClient.get(url, { params });

  return response.data;
}

async function update(id, data) {
  const url = `/get-fee-transaction/${id}`;

  const response = await sgiApiClient.patch(url, data);

  return response.data;
}

async function createInstallment(body) {
  const url = "/installment";

  const res = await sgiApiClient.post(url, body);

  return res.data;
}

async function updateInstallment(id, data) {
  const url = `/update-fee-transaction/${id}`;

  return await sgiApiClient.patch(url, data);
}

async function getAllFeesType() {
  const url = `/fee-type`;
  const response = await sgiApiClient.get(url);
  return response.data;
}
async function createFeesType(data) {
  const url = `/fee-type`;

  return await sgiApiClient.post(url, data);
}
async function updateFeesType(id, data) {
  const url = `/fee-type/${id}`;

  return await sgiApiClient.patch(url, data);
}
async function deleteFeesType(id, data) {
  const url = `/fee-type/${id}`;

  return await sgiApiClient.delete(url, data);
}
