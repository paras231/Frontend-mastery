import React from "react";
import Sidebar from "./Sidebar";
import ContentLayout from "./ContentLayout";

const PageLayout = () => {
  return (
    <>
      <div className=''>
        <Sidebar />
        <ContentLayout />
      </div>
     
    </>
  );
};

export default PageLayout;
