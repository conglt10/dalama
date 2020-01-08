import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PushAsset from './pages/PushAsset';
import DetailAsset from './pages/DetailAsset';
import HeaderPage from 'components/HeaderPage';
import FooterPage from 'components/FooterPage';
import UploadZip from './components/UploadZip';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderPage />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/new-asset' component={PushAsset} />
          <Route exact path='/detail/:did' component={DetailAsset} />
          <Route exact path='/upload' component={UploadZip} />
        </Switch>
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
