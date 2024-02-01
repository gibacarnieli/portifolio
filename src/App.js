import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Main />
        <Footer />
    </BrowserRouter>
  );
};

export default App;
