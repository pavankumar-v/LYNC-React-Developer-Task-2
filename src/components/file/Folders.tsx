import { type Folder } from '@/lib/interface';
import { Button, Col, Row } from 'antd';
import React, { useContext } from 'react';
import { FolderIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { FileDriveContext, FileDriveContextType } from '@/contexts/FileDriveProvider';

// const currentDir = getFolderByAccount(account).filter(
//   (folder) => folder.parentFolderID === currentFolderId
// );

const Folders: React.FC = () => {
  const { fileDrive } = useContext(FileDriveContext) as FileDriveContextType;
  const { folders } = fileDrive;
  return (
    <Row gutter={[30, 20]}>
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
  const navigate = useNavigate();
  const { setCurrentFolder } = useContext(FileDriveContext) as FileDriveContextType;

  function handleFolderDoubleClick() {
    navigate(`/dashboard/${folder.id}`);
    setCurrentFolder(folder.id);
  }

  return (
    <Button
      type="text"
      icon={<FolderIcon width={16} />}
      size="large"
      className="flex items-center hover:bg-blue-300 hover:cursor-default bg-gray-200 focus:bg-blue-300 active:bg-blue-300"
      onDoubleClick={handleFolderDoubleClick}
    >
      {folder.folderName}
    </Button>
  );
};

export default Folders;
