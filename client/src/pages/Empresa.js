import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet"

import PageTitle from "../components/PageTitle";
import Blurb from "../components/Blurb";
import EmpresaStyled from "../styles/pages/empresa.js";

class Empresa extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Empresa | Freezing</title>
        </Helmet>
        <CssBaseline />
        <EmpresaStyled />
        <section className="section">
          <Grid container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>A Freezing</span></PageTitle>
            </Grid>
          </Grid>
        </section>
        <section className="section info">
          <Grid container className="container" spacing={32}>
            <Grid item xs={12} sm={4}>
              <img className="img-fluid" src="img/empresa/ar-condicionado.jpg" alt="Ar Condicionado" />
            </Grid>
            <Grid item xs={12} sm={8}>
              <p>A Freezing  é uma empresa atuante no mercado de climatização desde 2006. Executando projetos  industrial ou residencial juntamente com profissionais da área de civil e arquitetura, elétrica, comercial e técnica buscamos atender as necessidades dos clientes com novos conceitos.</p>
              <p>Possuímos estrutura para diversos serviços em ar condicionado, desde a execução do projeto até o start up dos equipamentos.</p>
              <img className="img-fluid" src="img/empresa/ar-condicionado-grande.jpg" alt="Diversos ar condicionados" />
            </Grid>
          </Grid>
        </section>

        <section className="section">
          <Grid container className="container" spacing={32}>
            <Blurb />
            <Grid item xs={12} sm={4}>
              <div className="blurb">
                <div className="blurb--image">
                  <img className="img-fluid" src="img/empresa/missao-icon.png" alt="Ícone da Missão" />
                </div>
                <div className="blurb--text">
                  <h2 className="title">Missão</h2>
                  <p>Buscando novas ideias e inovações tecnológicas o credenciamento nas empresas lideres de mercado em equipamentos nos dão a certeza de suporte técnico adequado ao cliente.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="blurb">
                <div className="blurb--image">
                  <img className="img-fluid" src="img/empresa/visao-icon.png" alt="Ícone da Visão" />
                </div>
                <div className="blurb--text">
                  <h2 className="title">Visão</h2>
                  <p>Ser reconhecida como uma empresa de qualidade em produtos e execução de serviços de manutenção e projetos.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="blurb">
                <div className="blurb--image">
                  <img className="img-fluid" src="img/empresa/valores-icon.png" alt="Ícone da Valores" />
                </div>
                <div className="blurb--text">
                  <h2 className="title">Valores</h2>
                  <ul className="no-dots">
                    <li>Ética</li>
                    <li>Satisfação de todos os clientes e parceiros;</li>
                    <li>Valorização e respeito às pessoas;</li>
                    <li>Responsabilidade social e ambiental.</li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

      </Page>
    )
  }
}

export default Empresa;
