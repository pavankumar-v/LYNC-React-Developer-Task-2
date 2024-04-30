import Sidebar from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Layout, theme } from 'antd';
import Folders from '@components/file/Folders';
import FileBreadCrumb from '../breadcrumb/FileBreadCrumb';
import { useParams } from 'react-router-dom';

const { Header, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(useParams());

  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Navbar />
        </Header>
        <FileBreadCrumb />
        <Content className="mx-4 bg-white p-4" style={{ borderRadius: borderRadiusLG }}>
          <h2 className="text-lg font-semibold mb-3">Folders</h2>
          <Folders />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
