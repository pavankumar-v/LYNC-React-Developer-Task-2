import React from 'react';
import { Modal } from 'antd';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import useModal from '@/hooks/useModal';

const NewFolderButton: React.FC = () => {
  const { isModalOpen, showModal, handleOk, handleCancel } = useModal();

  return (
    <>
      <div className="flex items-center gap-2" onClick={showModal}>
        <FolderPlusIcon width={18} /> New Folder
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default NewFolderButton;
