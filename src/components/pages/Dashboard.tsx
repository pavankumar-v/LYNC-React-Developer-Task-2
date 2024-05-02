import Sidebar from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Layout, theme } from 'antd';
import Folders from '@components/file/Folders';
import FileBreadCrumb from '../breadcrumb/FileBreadCrumb';
import Files from '@components/file/Files';

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
        <FileBreadCrumb />
        <Content className="mx-4 bg-white p-4" style={{ borderRadius: borderRadiusLG }}>
          <Folders />
          <br />
          <Files />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
