import { MetaMaskButton, useSDK } from '@metamask/sdk-react-ui';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLoading from './PageLoading';

const MetamaskAuth: React.FC = () => {
  const { connected, account, connecting } = useSDK();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected && account) {
      navigate('/dashboard');
    }
  }, [connected, account, navigate]);

  if (connecting) {
    return <PageLoading />;
  }

  return (
    <div className="w-full h-full m-auto">
      <MetaMaskButton theme={'light'} color="white"></MetaMaskButton>
    </div>
  );
};

export default MetamaskAuth;
