import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivatePage = ({ page: Component }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={"/login"} /> : <Component />;
};

export default PrivatePage;
