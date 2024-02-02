import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const user = window.localStorage.getItem("CURRENT_USER_INFO");
    setUserInfo(JSON.parse(user));
  }, []);

  return userInfo.username !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
