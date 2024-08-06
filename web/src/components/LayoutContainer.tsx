import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ backgroundColor: "#141414"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          style={{ marginTop: "5px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Akash Maity",
            },
            {
              key: "2",
              icon: <InfoCircleOutlined />,
              label: "About us",
            },
            {
              key: "3",
              icon: <QuestionCircleOutlined />,
              label: "Support",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, fontSize: "25px" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "30px",
              width: 64,
              height: 64,
            }}
          />
          Task Board
        </Header>
            <Content
              style={{
                padding: 30,
                backgroundColor: "#141414"
              }}
            >
            {children}
            </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
