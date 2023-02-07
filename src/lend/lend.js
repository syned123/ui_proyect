import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./styles.css";
import { Navbar } from "./components/global/Navbar";
import { Sidebar } from "./components/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Client } from "./pages/Client";

import { PreApproval } from "./pages/PreApproval";
export const Lend = () => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Navbar />
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="client" element={<Client />} />
                <Route path="preAprobación" element={<PreApproval />} />

              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
