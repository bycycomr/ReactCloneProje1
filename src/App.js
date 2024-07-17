import React, { useState } from "react"; // Import useState from react

import { Layout } from "antd";

const { Sider, Header, Content } = Layout;
const App = () => {
  const  [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider' > </Sider>
      <Layout>
        <Header> </Header>
        <Content> </Content>
      </Layout>
    </Layout>
  );
};

export default App;
