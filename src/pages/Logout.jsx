import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    document.cookie = "authToken=; path=/; max-age=0";
    setTimeout(() => {
      navigate("/login");
    }, 1);
  }, []);
  return <></>;
}

export default Logout;
