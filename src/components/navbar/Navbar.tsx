import { Dropdown, Flex, MenuProps } from 'antd';
import React from 'react';
import { Avatar, Button } from 'antd';
import { PlusIcon } from '@heroicons/react/24/solid';
const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Account',
  },
];

const Navbar: React.FC = () => {
  return (
    <Flex
      className="navbar"
      align="center"
      justify="space-between"
      style={{ padding: '0 16px', height: '100%' }}
      gap={2}
    >
      <Button
        type="primary"
        icon={<PlusIcon fill="white" width={12} />}
        size={'middle'}
      >
        Add
      </Button>

      <Dropdown menu={{ items }} placement="bottomLeft">
        <Avatar
          style={{ backgroundColor: '', verticalAlign: 'middle' }}
          size="large"
        >
          P
        </Avatar>
      </Dropdown>
    </Flex>
  );
};

export default Navbar;
