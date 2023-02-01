import { Route, Routes } from "react-router-dom";
import { Lend } from "../pages/lend";

export const LendRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lend />} />
      </Routes>
    </>
  );
};
