import React from 'react';
import { Menu } from 'antd';
// import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;

const { Title } = Typography;

const Sidebar: React.FC = () => {
  return (
    <Sider style={{ height: '100%' }}>
      <Title level={5} className="!text-white p-4">
        File Drive
      </Title>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={[]} />
    </Sider>
  );
};

export default Sidebar;
