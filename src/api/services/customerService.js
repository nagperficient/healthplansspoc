import apiService from '../api/apiService';

const CUSTOMER_API = '/customers';

const customerService = {
  getAllCustomers: () => apiService.get(CUSTOMER_API),
  getCustomerById: (id) => apiService.get(`${CUSTOMER_API}/${id}`),
  createCustomer: (data) => apiService.post(CUSTOMER_API, data),
  updateCustomer: (id, data) => apiService.put(`${CUSTOMER_API}/${id}`, data),
  deleteCustomer: (id) => apiService.delete(`${CUSTOMER_API}/${id}`),
};

export default customerService;
