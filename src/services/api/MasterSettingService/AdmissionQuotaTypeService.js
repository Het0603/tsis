import { sgiApiClient } from "../../sgiApiClient";

export default {
  getAll,
  createAdmissionQuotaType,
  updateAdmissionQuotaType,
  deleteAdmissionQuotaType,
};

async function getAll(qParams = {}) {
  const url = "/admission-quotas";

  const response = await sgiApiClient.get(url, { qParams });

  return response.data.records || [];
}

async function createAdmissionQuotaType(data) {
  const url = `/admission-quota`;

  return await sgiApiClient.post(url, data);
}
async function updateAdmissionQuotaType(id, data) {
  const url = `/admission-quota/${id}`;

  return await sgiApiClient.patch(url, data);
}
async function deleteAdmissionQuotaType(id, data) {
  const url = `/admission-quota/${id}`;

  return await sgiApiClient.delete(url, data);
}
