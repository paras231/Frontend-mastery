import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="bg-primary text-white container-lg mt-2 "
        style={{ height: "30vmax" }}
      >
        <div className="row gx-5" style={{ height: "30vmax" }}>
          <div className="col-sm-3 bg-secondary text-white ">
            <div>hello</div>
          </div>
          <div className="col-sm-9 bg-danger text-white">
            <div>world</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
