import React from 'react';
import { ConfigProvider } from 'antd';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import MetamaskAuth from './components/pages/MetamaskAuth';
import Dashboard from './components/pages/Dashboard';
import { useSDK } from '@metamask/sdk-react-ui';
import PageLoading from './components/pages/PageLoading';

const Authenticate: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const { connected, account, connecting, ready } = useSDK();

  if (!ready) {
    return <PageLoading />;
  }

  if (connecting) {
    return <PageLoading />;
  }

  if (!connected) {
    return <Navigate to="/auth/metamask" />;
  }

  if (!account) {
    return <Navigate to="/auth/metamask" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: '/auth/metamask',
    element: <MetamaskAuth />,
  },
  {
    path: '/dashboard',
    element: (
      <Authenticate>
        <Dashboard />
      </Authenticate>
    ),
  },
]);

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 10,
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};

export default App;
