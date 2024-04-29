import React from 'react';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MetamaskAuth from './components/pages/MetamaskAuth';
import Dashboard from './components/pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MetamaskAuth />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
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
