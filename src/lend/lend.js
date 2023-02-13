import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./styles.css";
import { Navbar } from "./components/global/Navbar";
import { Sidebar } from "./components/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";


import { PreApproval } from "./pages/PreApproval";
import { User } from "./pages/User";
import { useState } from "react";
import { Client } from "./pages/client/Client";
export const Lend = () => {
  const [theme, colorMode] = useMode();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={`app ${toggled} ? 'toggled':'' `}>
            <Sidebar
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
            <main className="content">
              <Navbar
                a={collapsed}
                b={toggled}
                c={handleToggleSidebar}
                d={handleCollapsedChange}
              />

              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="client" element={<Client />} />
                <Route path="preapproval" element={<PreApproval />} />
                <Route path="user" element={<User />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
