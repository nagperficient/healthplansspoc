import apiService from '../api/apiService';

const HEALTH_PLAN_API = '/health_plans';

const healthPlanService = {
  getAllHealthPlans: () => apiService.get(HEALTH_PLAN_API),
  getHealthPlanById: (id) => apiService.get(`${HEALTH_PLAN_API}/${id}`),
  createHealthPlan: (data) => apiService.post(HEALTH_PLAN_API, data),
  updateHealthPlan: (id, data) => apiService.put(`${HEALTH_PLAN_API}/${id}`, data),
  deleteHealthPlan: (id) => apiService.delete(`${HEALTH_PLAN_API}/${id}`),
};

export default healthPlanService;
