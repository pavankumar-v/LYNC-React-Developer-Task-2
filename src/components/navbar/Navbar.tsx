import { Dropdown, Flex, MenuProps } from 'antd';
import React from 'react';
import { Avatar, Button } from 'antd';
import {
  PlusIcon,
  FolderPlusIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';
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
      <div className="flex items-center gap-2">
        <FolderPlusIcon width={18} /> New Folder
      </div>
    ),
  },
  {
    key: 'newFile',
    label: (
      <div className="flex items-center gap-2">
        <DocumentPlusIcon width={18} /> New File
      </div>
    ),
  },
];

const Navbar: React.FC = () => {
  return (
    <Flex
      className="h-full mx-4"
      align="center"
      justify="space-between"
      gap={2}
    >
      <Dropdown menu={{ items: addNewItems }}>
        <Button
          type="primary"
          icon={<PlusIcon fill="white" width={16} />}
          size={'large'}
          className="flex items-center"
        >
          Add
        </Button>
      </Dropdown>

      <Dropdown menu={{ items }} placement="bottomLeft">
        <Avatar
          style={{ backgroundColor: '', verticalAlign: 'middle' }}
          size="large"
          className="hover:cursor-pointer"
        >
          P
        </Avatar>
      </Dropdown>
    </Flex>
  );
};

export default Navbar;
