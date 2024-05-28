import { sgiApiClient } from "../sgiApiClient";

export default {
  getAll,
  get,
  create,
  update,
  deleteInquiry,
  getbyInqNo,
};

async function getAll(params = {}) {
  const url = `/inquiries`;
  const response = await sgiApiClient.get(url, { params });
  return response.data;
}

async function get(id) {
  const url = `/inquiry/${id}`;
  const response = await sgiApiClient.get(url);

  return response.data;
}

async function create(body) {
  const url = "/inquiry";
  const res = await sgiApiClient.post(url, body);
  return res.data;
}

async function update(id, data) {
  const url = `/inquiry/${id}`;
  const response = await sgiApiClient.patch(url, data);
  return response.data;
}

async function deleteInquiry(id, data) {
  const url = `/inquiry/${id}`;

  const response = await sgiApiClient.delete(url, data);
  return response.data;
}

async function getbyInqNo(inq_number) {
  const url = `/inquiry?inq_number=${inq_number}`;
  const response = await sgiApiClient.get(url);

  return response.data.records[0];
}
