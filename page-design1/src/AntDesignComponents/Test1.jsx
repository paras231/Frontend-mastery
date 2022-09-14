import React from "react";
import { Col, Row, Divider, Space } from "antd";
import "./Styles/Test1.scss";
const Test1 = () => {
  return (
    <>
      <Row style={{ height: "30vmax" }}>
        <Col style={{ backgroundColor: "red" }} flex={1}>
          <div className="container">2 / 5</div>
        </Col>
        <Col style={{ backgroundColor: "yellow" }} flex={3}>
          3 / 5
        </Col>
      </Row>
      <Divider plain>Center</Divider>

      <Row justify="space-between">
        <Col
          style={{
            backgroundColor: "purple",
            height: "10vmax",
            textAlign: "center",
          }}
          span={4}
          xs={{
            order: 1,
          }}
          sm={{
            order: 2,
          }}
          md={{
            order: 3,
          }}
          lg={{
            order: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          obcaecati sit quod eveniet asperiores voluptate illum minus totam
          eaque cum!
        </Col>
        <Col
          style={{ backgroundColor: "red" }}
          span={6}
          xs={{
            order: 2,
          }}
          sm={{
            order: 1,
          }}
          md={{
            order: 4,
          }}
          lg={{
            order: 3,
          }}
        >
          2 col-order-responsive
        </Col>
        <Col
          style={{ backgroundColor: "yellow" }}
          span={6}
          xs={{
            order: 3,
          }}
          sm={{
            order: 4,
          }}
          md={{
            order: 2,
          }}
          lg={{
            order: 1,
          }}
        >
          3 col-order-responsive
        </Col>
        <Col
          style={{ backgroundColor: "green" }}
          span={6}
          xs={{
            order: 6,
          }}
          sm={{
            order: 3,
          }}
          md={{
            order: 1,
          }}
          lg={{
            order: 2,
          }}
        >
          4 col-order-responsive
        </Col>
      </Row>
    </>
  );
};

export default Test1;
