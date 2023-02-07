import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { Header } from "../components/Header";
import { Group } from "./PreApprovalCo/Group";
import { Individual } from "./PreApprovalCo/Individual";

export const PreApproval = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="contenedor-first">
      <div className="contenedor-header">
        <div>
          <Header title="Pre Aprobación" />
        </div>
        <div></div>
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Individual />
          </TabPanel>
          <TabPanel value="2">
            <Group />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
