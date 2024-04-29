import React, { useContext } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import useModal from '@/hooks/useModal';
import { FileDriveContext, FileDriveContextType } from '@/contexts/FileDriveProvider';

import { nanoid } from 'nanoid';
import { Folder } from '@/lib/interface';
import { useSDK } from '@metamask/sdk-react-ui';
import { useParams } from 'react-router-dom';

const NewFolderButton: React.FC = () => {
  const { isModalOpen, showModal, handleOk, handleCancel } = useModal();
  const { folderId } = useParams();
  const { account = '' } = useSDK();
  const { fileDriveDispatch } = useContext(FileDriveContext) as FileDriveContextType;

  function handleOnSubmit(values: { folderName: string }) {
    const folder: Folder = {
      id: nanoid(),
      folderName: values.folderName,
      createdAt: new Date(),
      parentFolderID: folderId || 'my-drive',
      files: [],
      accountId: account,
    };

    fileDriveDispatch({ type: 'createFoler', payload: { folder } });
  }

  return (
    <>
      <div className="flex items-center gap-2" onClick={showModal}>
        <FolderPlusIcon width={18} /> New Folder
      </div>
      <Modal
        title="Create Folder"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="wrap"
          labelCol={{ flex: '110px' }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
          initialValues={{ folderName: 'Untitled' }}
          onFinish={handleOnSubmit}
        >
          <Form.Item name="folderName" rules={[{ required: true }]}>
            <Input placeholder="Folder Name" autoFocus />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewFolderButton;
