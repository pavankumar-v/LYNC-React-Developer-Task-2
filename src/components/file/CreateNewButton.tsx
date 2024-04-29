import { PlusIcon } from '@heroicons/react/24/outline';
import { Dropdown, Button, MenuProps } from 'antd';
import React from 'react';
import NewFolder from './NewFolderButton';
import NewFileUploadButton from './NewFileUploadButton';

const items: MenuProps['items'] = [
  {
    key: 'newFolder',
    label: <NewFolder />,
  },
  {
    key: 'newFile',
    label: <NewFileUploadButton />,
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
