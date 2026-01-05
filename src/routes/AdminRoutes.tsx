import { Navigate, Outlet } from "react-router-dom";
import { isAdminAuthenticated } from "../utils/auth";

export default function AdminRoutes() {
  return isAdminAuthenticated() ? <Outlet /> : <Navigate to="/admin" />;
}
