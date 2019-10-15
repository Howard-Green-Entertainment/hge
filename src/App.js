import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ClientInfoUpload from './pages/ClientInfoUpload';
import ClientDetail from './pages/ClientDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <ClientInfoUpload />
      <ClientDetail />
      <Footer />
    </div>
  );
}

export default App;
