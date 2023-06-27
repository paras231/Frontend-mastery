import React, { useState } from "react";
import {
  Sidebar as SidebarMain,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="flex ">
        <SidebarMain width="300px" collapsed={collapsed}>
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: disabled ? "white" : "crimson",
                    backgroundColor: active ? "#eecef9" : undefined,
                  };
              },
            }}
          >
            <SubMenu label="View">
              <MenuItem> Sprints </MenuItem>
              <MenuItem> Teams </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </SidebarMain>
        <main style={{ padding: 10 }}>
          <div>
            <button
              className="sb-button"
              onClick={() => setCollapsed(!collapsed)}
            >
              Collapse
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
