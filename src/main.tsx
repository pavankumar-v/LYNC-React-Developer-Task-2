import ReactDOM from 'react-dom/client';
import { MetaMaskProvider } from '@metamask/sdk-react';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MetaMaskProvider
    debug={false}
    sdkOptions={{
      dappMetadata: {
        name: 'Example React Dapp',
        url: window.location.href,
      },
      infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
    }}
  >
    <App />
  </MetaMaskProvider>
);
