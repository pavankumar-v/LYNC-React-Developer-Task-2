import { type Folder } from '@/lib/interface';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { FolderIcon } from '@heroicons/react/24/solid';

type Props = {
  folders: Folder[];
};

const Folders: React.FC<Props> = ({ folders }) => {
  return (
    <Row gutter={30}>
      {folders.map((folder: Folder, index) => {
        const key = `col-${index}`;
        return (
          <Col
            key={key}
            xs={{ flex: '100%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '10%' }}
          >
            <Folder folder={folder} />
          </Col>
        );
      })}
    </Row>
  );
};

const Folder: React.FC<{ folder: Folder }> = ({ folder }) => {
  return (
    <Button
      type="text"
      icon={<FolderIcon width={16} />}
      size="large"
      className="flex items-center hover:cursor-default bg-gray-200"
    >
      {folder.folderName}
    </Button>
  );
};

export default Folders;
