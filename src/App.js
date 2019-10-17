import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ClientInfoUpload from './pages/ClientInfoUpload';
import ClientDetail from './pages/ClientDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/upload" component={ClientInfoUpload} />
          <Route exact path="/:clientId" route={ClientDetail} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
