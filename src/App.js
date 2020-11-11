import React from 'react';

import './styles/app.css';
import NavLogo from './assets/logoJasph.png';

export default class App extends React.Component {
  navResponsive(){
    let navItems = document.getElementById('nav-items');
    navItems.classList.toggle("responsive");
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <div className="nav-logo">
            <img src={NavLogo} className="imageLogo" alt="logo Jasph" />
          </div>
          <div className="nav-items" id="nav-items">
            <a href="#" id="contato" className="contato">contato</a>
            <a href="#" id="sobreNos" className="sobreNos">sobre nós</a>
            <a href="#" id="integrantes" className="integrantes">integrantes</a>
            <a href="#" id="portfolio" className="portfolio">portfólio</a>
            <a href="#" id="organizacao" className="organizacao">organização</a>
            <a href="#" id="tecnologias" className="tecnologias">tecnologias</a>
          </div>
          <a href="javascript:void(0);" className="nav-close" onClick={this.navResponsive}>
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
    );
  }
}
