import './App.css';
import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Banner from './components/Banner';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Formação from './components/Formacao';
import Contato from './components/Contato';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Banner />
      <Sobre />
      <Formação />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
      </>
      
    )
  }
}

export default App;
