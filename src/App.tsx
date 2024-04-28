import React from 'react';
import { Layout, theme, ConfigProvider, Breadcrumb } from 'antd';
import Sidebar from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 10,
        },
      }}
    >
      <Layout style={{ height: '100%' }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Navbar />
          </Header>
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: 'Application Center',
                href: '',
              },
              {
                title: 'Application List',
                href: '',
              },
              {
                title: 'An Application',
              },
            ]}
            className="m-4"
          />
          <Content
            className="mx-4 bg-white p-4"
            style={{ borderRadius: borderRadiusLG }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
