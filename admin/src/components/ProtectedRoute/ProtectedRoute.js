import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Loading } from "../../pages";

import { AuthenticationContext } from "../../contexts/AuthenticationContext";

const ProtectedRoute = () => {
  const { isLoggedIn, isLoading } = useContext(AuthenticationContext);

  if (isLoading) return <Loading />;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
