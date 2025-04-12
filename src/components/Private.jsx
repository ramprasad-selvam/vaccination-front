import { Navigate } from "react-router-dom";
import { getCookie } from "../utlis/getCookie";
const PrivateRoute = ({ children }) => {
  const isAuthenticated = getCookie("authToken");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;
