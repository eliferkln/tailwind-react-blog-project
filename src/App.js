import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CardItem from './components/Card/CardItem';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
       <CardItem/>
      <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
