import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet"
import Page from '../components/Page';
import HomeStyled from "../styles/pages/home.js";

class Home extends Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isDesktop = width >= 960;

    if (isDesktop) {
      return (
        <Page>
          <Helmet>
            <title>Freezing - Instalação e Manutenção de Ar Condicionado</title>
          </Helmet>
          <CssBaseline />
          <HomeStyled />
          <Grid className="section" component="section" container justify="center">
            <Grid item className="container">
              <div className="highlights">
                <article className="highlights__card">
                  <img className="img-fluid" src="img/home/instalacao-completa.jpg" alt="Instalação Completa de Ar Condicionado" />
                  <div className="highlights__card--text">
                    <div className="title">Instalação & Infraestrutura</div>
                    <div className="description">Da execução do projeto até o start up dos equipamentos</div>
                  </div>
                </article>
                <article className="highlights__card">
                  <img className="img-fluid" src="img/home/manutencao.jpg" alt="Manutenção" />
                  <div className="highlights__card--text">
                    <div className="title">Preventiva<br />& Reparos</div>
                    <div className="description">Assistência Técnica Completa</div>
                  </div>
                </article>
                <article className="highlights__card">
                  <img className="img-fluid" src="img/home/gases-industriais.jpg" alt="Gases Industriais" />
                  <div className="highlights__card--text">
                    <div className="description">Fornecimento de Gases Industriais<br />
                      Locação de cilindros<br />
                      Acessórios para Solda</div>
                  </div>
                </article>
              </div>
            </Grid>
          </Grid>

          <Grid container justify="center" component="section" className="section">
            <Grid item className="container">
              <div className="section__block">
                <h2 className="subtitle">Bem vindos!!</h2>
                <p className="width-50">A Freezing é uma empresa atuante no mercado desde 2006 atuante em climatização desde 2006 executando rojetos  industrial ou residencial juntamente com profissionais da área de civil e arquitetura, elétrica, comercial e técnica buscamos atender as necessidades dos clientes com novos conceitos.</p>
              </div>

              <div className="section__block servicos">
                <h2 className="subtitle has-line"><span>Serviços</span></h2>

                <div className="servicos__items">
                  <div className="servicos__item">
                    <figure className="img-fluid servicos__item--img instalacao" alt="Ícone de Instalação" />
                    <h3 className="title">Instalação</h3>
                  </div>

                  <div className="servicos__item">
                    <figure className="img-fluid servicos__item--img manutencao" alt="Ícone de Manutenção" />
                    <h3 className="title">Manutenção</h3>
                  </div>

                  <div className="servicos__item">
                    <figure className="img-fluid servicos__item--img preventiva" alt="Ícone de Preventiva" />
                    <h3 className="title">Preventiva</h3>
                  </div>

                  <div className="servicos__item">
                    <figure className="img-fluid servicos__item--img deteccao" alt="Ícone de Detecção" />
                    <h3 className="title">Detecção</h3>
                  </div>

                  <div className="servicos__item">
                    <figure className="img-fluid servicos__item--img fornecimento" alt="Ícone de Fornecimento" />
                    <h3 className="title">Fornecimento</h3>
                  </div>
                </div>

              </div>

              <div className="section__block marcas">
                <h2 className="subtitle has-line"><span>Trabalhamos com as melhores marcas</span></h2>

                <div className="marcas__items">
                  <span className="marcas__item">
                    <img className="img-fluid" src="img/fujitsu-logo.png" alt="Logoda Fujitsu" />
                  </span>

                  <span className="marcas__item">
                    <img className="img-fluid" src="img/daikin-logo.png" alt="Logo da Daikin" />
                  </span>

                  <span className="marcas__item">
                    <img className="img-fluid" src="img/hitachi-logo.jpg" alt="Logo da Hitachi" />
                  </span>
                </div>

              </div>
            </Grid>
          </Grid>
        </Page>
      );
    } else {
      return (
        <Page>
          <Helmet>
            <title>Freezing - Instalação e Manutenção de Ar Condicionado</title>
          </Helmet>
          <CssBaseline />
          <HomeStyled />
          <Grid container justify="center" component="div" className="section">
            <Grid item className="container">
              <img className="img-fluid" src="img/logo.png" alt="Freezing Logo" />
            </Grid>
          </Grid>
          <Grid className="section" component="section" container justify="center">
            <Grid item className="container">
              <div className="highlights">
                <article className="highlights__card">
                  <img className="img-fluid" src="img/home/instalacao-completa.jpg" alt="Instalação Completa de Ar Condicionado" />
                  <div className="highlights__card--text">
                    <div className="title">Instalação & Infraestrutura</div>
                    <div className="description">Da execução do projeto até o start up dos equipamentos</div>
                  </div>
                </article>
                <article className="highlights__card">
                  <img className="img-fluid" src="img/home/manutencao.jpg" alt="Manutenção" />
                  <div className="highlights__card--text">
                    <div className="title">Preventiva<br />& Reparos</div>
                    <div className="description">Assistência Técnica Completa</div>
                  </div>
                </article>
                <article className="highlights__card">
                  <img className="img-fluid" src="img/home/gases-industriais.jpg" alt="Gases Industriais" />
                  <div className="highlights__card--text">
                    <div className="description">Fornecimento de Gases Industriais<br />
                      Locação de cilindros<br />
                      Acessórios para Solda</div>
                  </div>
                </article>
              </div>
            </Grid>
          </Grid>

          <Grid container justify="center" component="section" className="section">
            <Grid item className="container">
              <div className="section__block">
                <h2 className="subtitle">Bem vindos!!</h2>
                <p>A Freezing é uma empresa atuante no mercado desde 2006 atuante em climatização desde 2006 executando rojetos  industrial ou residencial juntamente com profissionais da área de civil e arquitetura, elétrica, comercial e técnica buscamos atender as necessidades dos clientes com novos conceitos.</p>
              </div>

              <div className="section__block servicos">
                <h2 className="subtitle has-line"><span>Serviços</span></h2>

                <div className="servicos__items">
                  <div className="servicos__item">
                    <img className="img-fluid" src="img/home/instalacao-icon.png" alt="Ícone de Instalação" />
                    <h3 className="title">Instalação</h3>
                  </div>

                  <div className="servicos__item">
                    <img className="img-fluid" src="img/home/manutencao-icon.png" alt="Ícone de Manutenção" />
                    <h3 className="title">Manutenção</h3>
                  </div>

                  <div className="servicos__item">
                    <img className="img-fluid" src="img/home/preventiva-icon.png" alt="Ícone de Preventiva" />
                    <h3 className="title">Preventiva</h3>
                  </div>

                  <div className="servicos__item">
                    <img className="img-fluid" src="img/home/deteccao-icon.png" alt="Ícone de Detecção" />
                    <h3 className="title">Detecção</h3>
                  </div>

                  <div className="servicos__item">
                    <img className="img-fluid" src="img/home/fornecimento-icon.png" alt="Ícone de Fornecimento" />
                    <h3 className="title">Fornecimento</h3>
                  </div>
                </div>

              </div>

              <div className="section__block marcas">
                <h2 className="subtitle has-line"><span>Trabalhamos com as melhores marcas</span></h2>

                <div className="marcas__items">
                  <span className="marcas__item">
                    <img className="img-fluid" src="img/fujitsu-logo.png" alt="Logoda Fujitsu" />
                  </span>

                  <span className="marcas__item">
                    <img className="img-fluid" src="img/daikin-logo.png" alt="Logo da Daikin" />
                  </span>

                  <span className="marcas__item">
                    <img className="img-fluid" src="img/hitachi-logo.jpg" alt="Logo da Hitachi" />
                  </span>
                </div>

              </div>
            </Grid>
          </Grid>
        </Page>
      );
    }
  }
}

export default Home;
