import React from 'react';
import Landing from './pages/Landing';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ClientInfoUpload from './pages/ClientInfoUpload';
import ClientDetail from './pages/ClientDetail';
import ClientList from './components/info-upload-form/ClientList';

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
            <Route exact path="/clients/:clientId" component={ClientDetail} />
            <Route exact path="/clients" component={ClientList} />
            <Route exact path="/upload" component={ClientInfoUpload} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
        <Footer />
    </div>
  );
}

export default App;
