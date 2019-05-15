import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet";
import BlurbInline from "../components/BlurbInline";
import PageTitle from "../components/PageTitle";
import FabricantesStyled from "../styles/pages/fabricantes.js";

class Fabricantes extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Fabricantes | Freezing</title>
        </Helmet>
        <CssBaseline />
        <FabricantesStyled />
        <section className="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>Fabricantes</span></PageTitle>
            </Grid>
          </Grid>
        </section>
        <section className="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <p className="description">Somos credenciados nos principais e mais conceituados fabricantes de aparelhos de ar condicionado do mercado. Confira!</p>
            </Grid>
          </Grid>
        </section>

        <section className="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <BlurbInline />
              <div className="blurb-inline">
                <div className="blurb-inline--img">
                  <img className="img-fluid" src="img/fujitsu-logo.png" alt="Logo da Fujitsu" />
                </div>
                <div className="text">
                  <span>A Fujitsu Ltd. é uma empresa multinacional japonesa de equipamentos e serviços de tecnologia da informação sediada em Tóquio, no Japão. Em 2015, foi o quarto maior provedor de serviços de TI do mundo medido pela receita de serviços de TI. Fortune nomeou a Fujitsu como uma das empresas mais admiradas do mundo</span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="blurb-inline">
                <div className="blurb-inline--img">
                  <img className="img-fluid" src="img/daikin-logo.png" alt="Logo da Daikin" />
                </div>
                <div className="text">
                  <span>A Daikin Industries, Ltd. é uma empresa multinacional japonesa de produção de ar condicionado sediada em Osaka. Tem operações no Japão, China, Filipinas, Austrália, Índia, Sudeste Asiático, Europa, América do Norte e América do Sul.</span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="blurb-inline">
                <div className="blurb-inline--img">
                  <img className="img-fluid" src="img/hitachi-logo.jpg" alt="Logo da Hitachi" />
                </div>
                <div className="text">
                  <span>A Hitachi, Ltd. é uma empresa conglomerada multinacional japonesa sediada em Chiyoda, Tóquio, Japão. É a empresa-mãe do Grupo Hitachi e faz parte do Grupo DKB de empresas</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>
      </Page>
    )
  }
}

export default Fabricantes;
