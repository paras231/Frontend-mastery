import React from "react";
import { FabricContextProvider } from "../context/FabricContext";
import FabricCanvas from "./FabricCanvas";
import FabricToolbar from "./FabricToolbar";

const MainComponent = () => {
  return (
    <>
      <FabricContextProvider>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <div
            style={{
              width: "100px",
              background: "gray",
              padding: "20px 20px 0 20px",
            }}
          >
            <FabricToolbar />
          </div>
          <div style={{ flex: "1" }}>
            <FabricCanvas />
          </div>
        </div>
      </FabricContextProvider>
    </>
  );
};

export default MainComponent;
