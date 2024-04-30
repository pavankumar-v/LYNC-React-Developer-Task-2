import { FileDriveContext, FileDriveContextType } from '@/contexts/FileDriveProvider';
import { getFileIcon, getTrimmedFileName } from '@/lib/file';
import { type File } from '@/lib/interface';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Row, Col, Dropdown, MenuProps, message, Popconfirm, PopconfirmProps } from 'antd';
import React, { useContext } from 'react';

const Files = () => {
  const { fileDrive } = useContext(FileDriveContext) as FileDriveContextType;
  const { files } = fileDrive;

  return (
    <>
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
    </>
  );
};

const File: React.FC<{ file: File }> = ({ file }) => {
  const url: string = `https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${file.IpfsHash}`;
  const fileIcon: string = getFileIcon(file.fileName);

  const items: MenuProps['items'] = [
    {
      key: 'rename',
      label: 'Rename',
      onClick: () => {
        // renameFolder(folder.id, )
      },
    },
    {
      key: 'delete',
      label: <DeleteFileButton fileId={file.IpfsHash} />,
      danger: true,
    },
  ];

  return (
    <div className="p-4 bg-gray-200 rounded-2xl hover:cursor-pointer hover:bg-gray-300 w-[18rem]">
      <div className="flex items-center  justify-between mb-2">
        <div className="flex items-center gap-1">
          <img src={fileIcon} alt="" width={20} />
          <h6 className="text-sm text-gray-700 text-ellipsis overflow-hidden mt-0.5">
            {getTrimmedFileName(file.fileName)}
          </h6>
        </div>
        <Dropdown menu={{ items }} trigger={['click']}>
          <EllipsisVerticalIcon width={25} className="hover:cursor-pointer hover:bg-gray-200 rounded-lg ml-2 p-1" />
        </Dropdown>
      </div>

      <img
        src={url}
        alt="ipfs image"
        className="file-thumbnail rounded-2xl"
        onClick={() => window.open(url, '_blank')}
      />
    </div>
  );
};

export const DeleteFileButton: React.FC<{ fileId: string }> = () => {
  const { fileDriveDispatch, getCurrentFolderDir } = useContext(FileDriveContext) as FileDriveContextType;

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    e?.preventDefault();
    // deleteFolder(fileId);
    fileDriveDispatch({ type: 'updateFolders', payload: { folders: getCurrentFolderDir() } });
    message.success('Folder Deleted');
  };

  return (
    <Popconfirm
      title="Are you sure?"
      description="Are you sure to delete this folder?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      Delete
    </Popconfirm>
  );
};

export default Files;
