import React from 'react';
import { Spin } from 'antd';
import { MetaMaskButton, useSDK } from '@metamask/sdk-react-ui';
import { LoadingOutlined } from '@ant-design/icons';

const MetamarkUIButton: React.FC = () => {
  const { connected, connecting, account } = useSDK();

  if (connecting) {
    return (
      <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />
    );
  }

  if (connected && account) {
    return <div>{account && `${account}`}</div>;
  }

  return <MetaMaskButton theme={'light'} color="white"></MetaMaskButton>;
};

export default MetamarkUIButton;
