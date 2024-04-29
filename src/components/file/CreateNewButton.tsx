import {
  DocumentPlusIcon,
  FolderPlusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { Dropdown, Button, MenuProps } from 'antd';
import React from 'react';

const items: MenuProps['items'] = [
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

const CreateNewButton: React.FC = () => {
  return (
    <Dropdown menu={{ items }}>
      <Button
        type="primary"
        icon={<PlusIcon fill="white" width={16} />}
        size={'large'}
        className="flex items-center"
      >
        Add
      </Button>
    </Dropdown>
  );
};

export default CreateNewButton;
