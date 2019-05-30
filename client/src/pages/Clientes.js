import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet";
import PageTitle from "../components/PageTitle";
import ClientesStyled from "../styles/pages/clientes.js";

class Clientes extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Clientes | Freezing</title>
        </Helmet>
        <CssBaseline />
        <ClientesStyled />
        <Grid container justify="center" component="section" className="section logo">
          <Grid item className="container">
            <img className="img-fluid" src="img/logo.png" alt="Freezing Logo" />
          </Grid>
        </Grid>
        <section className="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>Clientes</span></PageTitle>
            </Grid>
          </Grid>
        </section>
        <section className="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <p className="description">Já atendemos todos os tipos de obras e exigências ! Esses são alguns de nossos clientes.</p>
            </Grid>
          </Grid>
        </section>

        <section className="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <div className="clientes">
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/daslu-logo.png" alt="Logo da Daslu" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/5asec-logo.png" alt="Logo da 5asec" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/advanced-cambio-logo.png" alt="Logo da Advanced Câmbio" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/kopenhagen-logo.png" alt="Logo da Kopenhagen" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/elavon-logo.png" alt="Logo da Elavon" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/fuvest-logo.png" alt="Logo da Fuvest" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/shoestock-logo.png" alt="Logo da Shoestock" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/colegio-logo.png" alt="Logo do Colégio Imperatriz Leopoldina" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/staf-logo.png" alt="Logo da S.T.A.F." /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/mahogany-logo.png" alt="Logo da Mahogany Cosméticos" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/zabo-logo.png" alt="Logo da Zabo Enhenharia" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/fazane-logo.png" alt="Logo da Fazane" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/medcorp-imagem-logo.png" alt="Logo da Medcorp" /></div>
                <div className="clientes--item"><img className="img-fluid" src="img/clientes/smh-logo.png" alt="Logo da SMH - Sistemas Contra Incêndio" /></div>
              </div>
            </Grid>
          </Grid>
        </section>
      </Page>
    )
  }
}

export default Clientes;
