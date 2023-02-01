import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/login";
import { LendRoutes } from "../lend/routes/lendRoutes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lend" element={<LendRoutes />} />
      </Routes>
    </>
  );
};
