import React from 'react';
import Landing from './pages/Landing';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ClientInfoUpload from './pages/ClientInfoUpload';
import ClientDetail from './pages/ClientDetail';
import ClientList from './components/info-upload-form/ClientList';
import Video from './components/global/Video';
import routes from './routes/routes';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Header />
      <div className="app-content">
        <Router>
          <Switch>
            <Route path={routes.VIDEO.path} component={Video} />
            <Route path={routes.CLIENT_DETAIL.path} component={ClientDetail} />
            <Route path={routes.CLIENTS.path} component={ClientList} />
            <Route path={routes.UPLOAD.path} component={ClientInfoUpload} />
            <Route exact path={routes.LANDING.path} component={Landing} />
          </Switch>
        </Router>
      </div>
        <Footer />
    </div>
  );
}

export default App;
