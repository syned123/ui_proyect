import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/login";
import { useAuthStore } from "../hooks/useAuthStore";
import { Lend } from "../lend/lend";

export const AppRoutes = () => {
  const { status, checkAuthToken } = useAuthStore();
  useEffect(() => {
    checkAuthToken();
  }, []);
  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/auth/*" element={<Login />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        ) : (
          <>
            <Route path="/lend/*" element={<Lend />} />;
            <Route path="/*" element={<Navigate to="/lend" />} />
          </>
        )}
      </Routes>
    </>
  );
};
