import React from 'react';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';

import './style.css';

const { Header, Content } = Layout;

function LayoutComponent(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">Todo List</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Todo List</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {props.children}
      </Content>
    </Layout>
  );
}

export default LayoutComponent;
