import { FileDriveContext, FileDriveContextType } from '@/contexts/FileDriveProvider';
import { Breadcrumb } from 'antd';
import React, { useContext } from 'react';

const FileBreadCrumb: React.FC = () => {
  const { currentFilePath } = useContext(FileDriveContext) as FileDriveContextType;

  console.log(currentFilePath);
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Application Center',
            href: '',
          },
          {
            title: 'Application List',
            href: '',
          },
          {
            title: 'An Application',
          },
        ]}
        className="m-4"
      />
    </div>
  );
};

export default FileBreadCrumb;