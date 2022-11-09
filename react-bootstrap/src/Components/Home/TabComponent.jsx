import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { SwiperComponent } from "./Card";

const TabComponent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {" "}
      <center>
        <div className=" w-75">
          <Box sx={{ width: "90%" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  sx={{ marginTop: "5vmax" }}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Item One" value="1" />
                  <Tab
                    label="Item Two"
                    value="2"
                    sx={{ marginLeft: "5vmax" }}
                  />
                  <Tab
                    label="Item Three"
                    value="3"
                    sx={{ marginLeft: "5vmax" }}
                  />
                  <Tab
                    label="Item Three"
                    value="4"
                    sx={{ marginLeft: "5vmax" }}
                  />
                  <Tab
                    label="Item Three"
                    value="5"
                    sx={{ marginLeft: "5vmax" }}
                  />
                  <Tab
                    label="Item Three"
                    value="4"
                    sx={{ marginLeft: "5vmax" }}
                  />
                  <Tab
                    label="Item Three"
                    value="5"
                    sx={{ marginLeft: "5vmax" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <SwiperComponent />
              </TabPanel>
              <TabPanel value="2">
                <SwiperComponent />
              </TabPanel>
              <TabPanel value="3">
                <SwiperComponent />
              </TabPanel>
              <TabPanel value="4">
                <SwiperComponent />
              </TabPanel>
              <TabPanel value="5">
                <SwiperComponent />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </center>
    </>
  );
};

export default TabComponent;
