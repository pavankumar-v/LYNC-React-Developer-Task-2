import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
// import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;
// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
// ];

const Sidebar: React.FC = () => {
  return (
    <Sider trigger={null} collapsible>
      <Title level={5} className="!text-white p-4">
        File Drive
      </Title>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            // icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            // icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            // icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
