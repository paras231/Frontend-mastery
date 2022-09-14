import React from "react";
import "./Styles/Test1.scss";
import { Layout, Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const LayoutTesting = () => {
  const url =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  const url2 =
    "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <>
      <Layout>
        <Header className="main-header">
          <div className="nav-wrapper">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </Header>
        <Layout className="main-layout" style={{ marginTop: "5vmax" }}>
          <Content className="content-container">
            <img src={url2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              accusamus tenetur consequatur ratione quas ex eum atque temporibus
              corporis modi, aliquam expedita ullam, dignissimos rem similique?
              Ullam nostrum necessitatibus voluptatum, doloremque inventore, nam
              eos quis sint ratione aperiam, repellat libero!
            </p>
          </Content>
          <Sider className="sider-container">
            <img src={url} alt="laptop" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              harum tempora. Repudiandae velit pariatur, error totam culpa
              numquam minima doloremque obcaecati reprehenderit! Ipsa quibusdam
              cum mollitia praesentium voluptatum, reprehenderit pariatur
              facilis quia sequi nobis quis ipsum, modi quidem accusamus, natus
            </p>
          </Sider>
        </Layout>
        <Button style={{ width: "8vmax" }}>Click Me</Button>
        <Footer style={{ backgroundColor: "purple", marginTop: "10vmax" }}>
          Footer
        </Footer>
      </Layout>
    </>
  );
};

export default LayoutTesting;
