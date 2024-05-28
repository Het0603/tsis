import { sgiApiClient } from "../../sgiApiClient";

export default {
  getAll,
  createDocumentType,
  updateDocumentType,
  deleteDocumentType,
};

async function getAll(params = {}) {
  const url = "/document-types";

  const response = await sgiApiClient.get(url, { params });

  return response.data || [];
}

async function createDocumentType(data) {
  const url = `/document-type`;

  return await sgiApiClient.post(url, data);
}
async function updateDocumentType(id, data) {
  const url = `/document-type/${id}`;

  return await sgiApiClient.patch(url, data);
}
async function deleteDocumentType(id, data) {
  const url = `/document-type/${id}`;

  return await sgiApiClient.delete(url, data);
}
