import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
