import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ClientInfoUpload from './pages/ClientInfoUpload';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <ClientInfoUpload />
      <Footer />
    </div>
  );
}

export default App;
