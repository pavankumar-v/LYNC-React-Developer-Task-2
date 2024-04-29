import Sidebar from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Layout, Breadcrumb, theme } from 'antd';

const { Header, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
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
  );
};

export default Dashboard;
