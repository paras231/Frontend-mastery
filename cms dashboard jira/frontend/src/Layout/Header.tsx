import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Header = () => {
  return (
    <>
      <div className="">
        <TabComponent />
      </div>
    </>
  );
};

export default Header;

const TabComponent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <TabContext value={value}>
        <Box
        // sx={{
        //   borderBottom: 2,
        //   borderColor: "divider",
        //   position: "fixed",
        //   top: "0",
        //   width: "70%",
        //   zIndex:10
        // }}
        >
          <TabList
            className="shadow-lg rounded-md"
            centered
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Projects" value="1" />
            <Tab label="Teams" value="2" />
            <Tab label="Tasks" value="3" />
            <Tab label="Manage" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Projects List</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Manage tasks</TabPanel>
      </TabContext>
    </>
  );
};
