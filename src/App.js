import './App.css';
import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Banner from './components/Banner';
import Projetos from './components/Projetos';
import Formação from './components/Formacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import HardSkills from './components/HardSkills';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Banner />
      <Sobre />
      <Formação />
      <HardSkills />
      <Projetos />
      <Contato />
      <Footer />
      </>
      
    )
  }
}

export default App;
