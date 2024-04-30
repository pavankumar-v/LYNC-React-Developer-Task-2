import { FileDriveContext, FileDriveContextType } from '@/contexts/FileDriveProvider';
import { type File } from '@/lib/interface';
import { FolderIcon } from '@heroicons/react/24/outline';
import { Empty, Row, Col, Button } from 'antd';
import React, { useContext } from 'react';

const Files = () => {
  const { fileDrive } = useContext(FileDriveContext) as FileDriveContextType;
  const { files } = fileDrive;

  if (files.length == 0) {
    return <Empty />;
  }

  return (
    <Row gutter={[30, 20]}>
      {files.map((file: File, index) => {
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
            <File file={file} />
          </Col>
        );
      })}
    </Row>
  );
};

const File: React.FC<{ file: File }> = ({ file }) => {
  return (
    <Button
      type="text"
      icon={<FolderIcon width={16} />}
      size="large"
      className="flex items-center hover:bg-blue-300 hover:cursor-default bg-gray-200 focus:bg-blue-300 active:bg-blue-300"
      //   onDoubleClick={handleFolderDoubleClick}
    >
      {file.fileName}
    </Button>
  );
};

export default Files;
