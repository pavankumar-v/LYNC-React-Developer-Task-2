import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu, MenuProps } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
];

const Sidebar: React.FC = () => {
  return (
    <Sider collapsible>
      <Title level={5} className="text-white logo">
        File Drive
      </Title>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
