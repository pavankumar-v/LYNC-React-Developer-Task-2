import React, { useState } from 'react';
import {
  DocumentPlusIcon,
  ArrowUpOnSquareIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  GetProp,
  Modal,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from 'antd';
import useModal from '@/hooks/useModal';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const NewFileUploadButton: React.FC = () => {
  const { isModalOpen, showModal, handleOk, handleCancel } = useModal();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file as FileType);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <>
      <div className="flex items-center gap-2" onClick={showModal}>
        <DocumentPlusIcon width={18} /> New File
      </div>

      <Modal
        title="Upload File"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
            key="uploadBtn"
          >
            {uploading ? 'Uploading' : 'Start Upload'}
          </Button>,
        ]}
      >
        <Upload {...props}>
          <Button icon={<ArrowUpOnSquareIcon width={14} />}>Select File</Button>
        </Upload>
      </Modal>
    </>
  );
};

export default NewFileUploadButton;
