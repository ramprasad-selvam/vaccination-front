import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    // document.cookie = "authToken=exampleToken123; path=/; max-age=86400";
    // document.cookie = "authToken=; path=/; max-age=0";
    setTimeout(() => {
      navigate("/login");
    }, 10);
  }, []);
  return <></>;
}

export default Logout;
