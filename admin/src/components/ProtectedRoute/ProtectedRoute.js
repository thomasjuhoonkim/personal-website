import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthenticationContext } from "../../contexts/AuthenticationContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
