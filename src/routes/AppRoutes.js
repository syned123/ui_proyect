import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/login";
import { Lend } from "../lend/lend";


export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lend/*" element={<Lend />} />
      </Routes>
    </>
  );
};
