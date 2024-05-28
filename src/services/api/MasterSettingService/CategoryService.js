import { sgiApiClient } from "../../sgiApiClient";

export default {
  getAll,
  createCategoryType,
  updateCategoryType,
  deleteCategoryType,
};

async function getAll(qParams = {}) {
  const url = "/cast-categories";

  const response = await sgiApiClient.get(url, { qParams });

  return response.data || [];
}

async function createCategoryType(data) {
  const url = `/cast-category`;

  return await sgiApiClient.post(url, data);
}
async function updateCategoryType(id, data) {
  const url = `/cast-category/${id}`;

  return await sgiApiClient.patch(url, data);
}
async function deleteCategoryType(id, data) {
  const url = `/cast-category/${id}`;

  return await sgiApiClient.delete(url, data);
}
