import { Dropdown, Flex, MenuProps } from 'antd';
import React from 'react';
import { Avatar, Button } from 'antd';
import { PlusIcon, FolderPlusIcon } from '@heroicons/react/24/solid';
const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Account',
  },
];

const addNewItems: MenuProps['items'] = [
  {
    key: 'newFolder',
    label: (
      <div className="flex flex-center">
        <FolderPlusIcon width={18} /> New Folder
      </div>
    ),
  },
  {
    key: 'newFile',
    label: 'New File',
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
      <Dropdown menu={{ items: addNewItems }}>
        <Button
          type="primary"
          icon={<PlusIcon fill="white" width={16} />}
          size={'large'}
          className="flex flex-center"
        >
          Add
        </Button>
      </Dropdown>

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
