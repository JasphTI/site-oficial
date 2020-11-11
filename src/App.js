import React from 'react';

import './styles/app.css';

import NavLogo from './assets/logoJasph.png';
import arte from './assets/arte.svg';
import organizacaoA from './assets/organizacao1.svg';
import organizacaoB from './assets/organizacao2.svg';
import organizacaoC from './assets/organizacao3.svg';
import organizacaoD from './assets/organizacao4.svg';
import portfolio from './assets/portfolio.jpg';
import sobrenos from './assets/sobrenos.svg';
import fotoallyson from './assets/allyson.jpg';

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
            <a href="#" id="sobreNos" className="sobreNos">sobre nós</a>
            <a href="#" id="portfolio" className="portfolio">portfólio</a>
            <a href="#" id="organizacao" className="organizacao">organização</a>
            <a href="#" id="tecnologias" className="tecnologias">tecnologias</a>
            <a href="#" id="integrantes" className="integrantes">integrantes</a>
            <a href="#" id="contato" className="contato">contato</a>
          </div>
          <a href="javascript:void(0);" className="nav-close" onClick={this.navResponsive}>
            <i class="fa fa-bars"></i>
          </a>
        </div>

        <div className="topicos">

          <section id="secsobrenos" for="#sobreNos">
            <div className="cont_imagem">
              <img src={sobrenos} className="imagem" alt="icone grupo" />
            </div>
            <div className="descricao">
              <h1>Sobre nós</h1>
              <p>O Jasph é um time que traz soluções para seus clientes por meio de sistemas web e sites, visando sempre entregar o produto com comprometimento, qualidade e valor.</p>
            </div>
          </section>

          <div className="divisor">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <section id="secportfolio" for="#portfolio">
            <div className="conteudo">
              <div className="descricao">
                <h1>Portfólio</h1>
              </div>
            </div>
          </section>
          
          <div className="divisor">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <section id="secorganizacao" for="#organizacao">
            <div className="descricao">
              <h1>Organização</h1>
            </div>
            <div className="carrosel">
              <div className="conteudo">

                <img src={organizacaoA} alt="passos atendimento" />

                <p>O primeiro passo no Jasph é conversar com o cliente, para ter uma ideia do que ele quer e começar a planejar</p>

                <div className="passadores">
                  <span className="left"><i class="fas fa-angle-left"></i></span>
                  <span className="right"><i class="fas fa-angle-right"></i></span>
                </div>

              </div>

              <div className="orientacao">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </section>

          <div className="divisor">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <section id="sectecnologias" for="#tecnologias">
            <div className="conteudo">

              <div className="descricao">
                <h1>Tecnologias</h1>
              </div>

              <div className="icones">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-php"></i>
                <i class="fas fa-database"></i>
              </div>
              
              <div className="amostra">
                <p>body h1 Bem vindo(a) h1 body</p>
              </div>

            </div>
          </section>
          
          <div className="divisor">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <section id="secintegrantes" for="#integrantes">
            <div className="conteudo">

              <div className="descricao">
                <h1>Integrantes</h1>
              </div>

              <div className="integrante">
                <div className="foto">
                  <img src={fotoallyson} alt="foto do integrante Allyson" />
                </div>
                <div className="texto">
                  <p>Programar é minha paixão, a possibilidade de trabalhar com o que gosto me anima bastante.</p>
                </div>
                <div className="icones">
                  <a href="#"><i></i></a>
                  <a href="#"><i></i></a>
                  <a href="#"><i></i></a>
                </div>
              </div>

            </div>
          </section>

          <div className="divisor">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <section id="seccontato" for="#contato">
            <div className="conteudo">

              <div className="descricao">
                <h1>Contato</h1>
              </div>

              <div className="links">
                <a href="#">workana</a>
                <a href="#">(61) 9 9396-8144</a>
                <a href="#">jasphsolucoesemti@gmail.com</a>
              </div>

            </div>
          </section>

        </div>
      </div>
    );
  }
}
