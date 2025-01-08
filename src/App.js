import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { ConfigProvider } from 'antd';
import Routes from './Pages/Routes'
import { useAuthContext } from './Context/Auth';
import ScreenLoder from './components/ScreenLoder'

function App() {
  const { isAppLoading } = useAuthContext()
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: '#1d3557' } }}>
        {isAppLoading
          ? <ScreenLoder />
          :  <Routes />
        }
      </ConfigProvider>
    </>
  );
}

export default App;
