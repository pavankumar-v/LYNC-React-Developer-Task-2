import React from 'react';
import { Button } from 'antd';
import { useSDK } from '@metamask/sdk-react';

const MetamarkUIButton: React.FC = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn('failed to connect..', err);
    }
  };

  if (connected) {
    return <div>{account && `${account}`}</div>;
  }

  return (
    <Button type="primary" onClick={connect} loading={connecting}>
      Connect
    </Button>
  );
};

export default MetamarkUIButton;
