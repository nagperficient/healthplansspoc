import apiService from '../api/apiService';

const CUST_HEALTH_PLAN_API = '/cust_health_plans';

const custHealthPlanService = {
  getAllCustHealthPlans: () => apiService.get(CUST_HEALTH_PLAN_API),
  getCustHealthPlanById: (id) => apiService.get(`${CUST_HEALTH_PLAN_API}/${id}`),
  createCustHealthPlan: (data) => apiService.post(CUST_HEALTH_PLAN_API, data),
  updateCustHealthPlan: (id, data) => apiService.put(`${CUST_HEALTH_PLAN_API}/${id}`, data),
  deleteCustHealthPlan: (id) => apiService.delete(`${CUST_HEALTH_PLAN_API}/${id}`),
};

export default custHealthPlanService;
