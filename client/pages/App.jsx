import React from "react";
import Footer from "../components/footer/footer";
import Imagem from "../components/imagem/imagem";
import Cards from "../components/cards/cards";
import Header from "../components/header/header";

import "./App.css"
import Container from "../components/container/container";
import Imga from "../components/imga/imga";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Imagem />
      <Container/>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="texto">
        <h1>
          PETS PARA ADOÇÃO🐶🐶
          </h1>
        </div>
        <Imga/>
      <Footer />
    </div>
  );
};

export default App;
