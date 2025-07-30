import { BASEURL, BASEURL2 } from "../../api/axiosInstance";

const USER_PATHS = {
    login: `${BASEURL}/auth/user-login`,
    customer_health_plans: `${BASEURL}/cust_health_plans/by-customer`,
    health_plans: `${BASEURL}/health_plans`,
}
const NOTIFICATIONS_PATHS = {
    get_all_unread_notifications: `${BASEURL2}/unread`,
    mark_as_read: `${BASEURL2}/{id}/read`,
}
export {USER_PATHS, NOTIFICATIONS_PATHS}