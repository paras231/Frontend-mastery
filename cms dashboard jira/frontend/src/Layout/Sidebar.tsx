import React, { useState } from "react";
import {
  Sidebar as SidebarMain,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Switch from "@mui/material/Switch";
import { MdTask, MdTaskAlt, MdPeople } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { BiSolidBarChartSquare } from "react-icons/bi";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="flex">
        <SidebarMain
          rootStyles={{
            borderRadius: "10px",
            backgroundColor: "blue",
          }}
          width="300px"
          collapsed={collapsed}
          transitionDuration={1000}
        >
          <Menu>
            <SubMenu icon={<MdTask />} label="View">
              <MenuItem icon={<MdTaskAlt />}> Sprints </MenuItem>
              <MenuItem icon={<MdPeople />}> Teams </MenuItem>
            </SubMenu>
            <SubMenu icon={<BiSolidBarChartSquare />} label="Charts">
              <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
              <MenuItem>Progress</MenuItem>
            </SubMenu>
            <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
            <MenuItem>Progress</MenuItem>
            <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
            <MenuItem>Progress</MenuItem>
            <SubMenu icon={<BiSolidBarChartSquare />} label="Charts">
              <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
              <MenuItem>Progress</MenuItem>
            </SubMenu>
            <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
            <MenuItem>Progress</MenuItem>
            <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
            <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
            <MenuItem>Progress</MenuItem>
            <MenuItem icon={<GiProgression />}>Productivity</MenuItem>
          </Menu>
        </SidebarMain>
        <main style={{ padding: 10 }}>
          <div>
            <Switch onClick={() => setCollapsed(!collapsed)} size="small" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
