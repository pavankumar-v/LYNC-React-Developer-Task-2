import Sidebar from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Layout, Breadcrumb, theme } from 'antd';
import { useContext } from 'react';
import {
  FileDriveContext,
  FileDriveContextType,
} from '@/contexts/FileDriveProvider';
import Folders from '@components/file/Folders';

const { Header, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { fileDrive } = useContext(FileDriveContext) as FileDriveContextType;

  console.log(fileDrive);

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
          <h2 className="text-lg font-semibold mb-3">Folders</h2>
          <Folders folders={fileDrive.dirs} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
