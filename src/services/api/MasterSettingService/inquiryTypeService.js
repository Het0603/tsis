import { sgiApiClient } from "../../sgiApiClient";

export default {
    getAll,
    createInquiryType,
    updateInquiryType,
    deleteInquiryType
};


async function getAll(params = {}) {
    const url = '/inquiry-types'

    const response = await sgiApiClient.get(url, { params })

    return response.data.records || []
}

async function createInquiryType(data) {
    const url = `/inquiry-type`;
  
    return await sgiApiClient.post(url, data);
  }
  async function updateInquiryType(id, data) {
    const url = `/inquiry-type/${id}`;
  
    return await sgiApiClient.patch(url, data);
  }
  async function deleteInquiryType(id, data) {
    const url = `/inquiry-type/${id}`;
  
    return await sgiApiClient.delete(url, data);
  }