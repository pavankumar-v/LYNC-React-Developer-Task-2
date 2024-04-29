import { Breadcrumb } from 'antd';
import React from 'react';

const FileBreadCrumb: React.FC = () => {
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
