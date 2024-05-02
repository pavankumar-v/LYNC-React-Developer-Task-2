import { MetaMaskButton, useSDK } from '@metamask/sdk-react-ui';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLoading from './PageLoading';
import { FileDriveContext, FileDriveContextType } from '@/contexts/FileDriveProvider';

const MetamaskAuth: React.FC = () => {
  const { connected, account, connecting } = useSDK();
  const { currentFolderId } = useContext(FileDriveContext) as FileDriveContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (connected && account) {
      navigate(`/dashboard/${currentFolderId}`);
    }
  }, [account, connected]);

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
