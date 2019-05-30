import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet";
import PageTitle from "../components/PageTitle";
import GradientSubtitle from "../components/GradientSubtitle";
import GasesIndustriaisStyled from "../styles/pages/gasesIndustriais.js";

class GasesIndustriais extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Gases Industriais | Freezing</title>
        </Helmet>
        <CssBaseline />
        <GasesIndustriaisStyled />
        <Grid container justify="center" component="section" className="section logo">
          <Grid item className="container">
            <img className="img-fluid" src="img/logo.png" alt="Freezing Logo" />
          </Grid>
        </Grid>
        <Grid id="gases-industriais" className="section" container justify="center" component="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>Freezing Gases Industriais</span></PageTitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="section" component="section" container justify="center">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <p className="description">Trabalhamos com fornecimento de gases industriais, locações de cilindros e acessórios consumíveis para solda em geral.</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="section" component="section" container justify="center">
          <Grid item container className="container" spacing={24}>
            <Grid className="cilinders" item xs={12} sm={8}>

              <div className="col larger">
                <img className="img-fluid" src="img/gases-industriais/gases-industriais-01.jpg" alt="Dois cilindros, um verde e outro laranja" />
              </div>

              <div className="col">
                <div className="imgs">
                  <div className="img">
                    <img className="img-fluid" src="img/gases-industriais/gases-industriais-02.jpg" alt="Dois cilindros, um preto e outro vermelho" />
                  </div>

                  <div className="img">
                    <img className="img-fluid" src="img/gases-industriais/cilindros-coloridos.jpg" alt="8 cilindros coloridos" />
                  </div>
                </div>
                <div className="content">
                  <GradientSubtitle className="no-bg">
                    <span>Gases Industriais</span>
                  </GradientSubtitle>
                  <p>Fornecemos gases industriais e misturas especiais.</p>
                  <p>Confira:</p>

                  <Grid item container spacing={32}>
                    <Grid item sm={3}>
                      <ul className="list-hifen blue">
                        <li>Acetinelo</li>
                        <li>Argônio</li>
                        <li>Oxigênio</li>
                        <li>Nitrogênio</li>
                      </ul>
                    </Grid>

                    <Grid item sm>
                      <ul className="list-hifen blue">
                        <li>Hélio</li>
                        <li>CO2</li>
                        <li>Misturas MIG</li>
                        <li>E Misturas Especiais</li>
                      </ul>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div className="gradient-block blue faca-seu-pedido">
                <img className="img-fluid" src="img/shopping-cart--icon.png" alt="Carrinho de Compras" />
                <div className="content">
                  <h3 className="title">Faça seu pedido</h3>
                  <div className="text">
                    <a href="tel:011958966939" rel="noopener noreferrer">(11) 95896-6939</a>
                    <a href="tel:01144494607" rel="noopener noreferrer">(11) 4449-4607</a>
                  </div>
                  <div className="text">
                    <a href="mailto:gases@freezing.com.br" target="_blank" rel="noopener noreferrer">gases@freezing.com.br</a>
                  </div>
                </div>
              </div>

              <div className="gradient-block brown fazemos-entregas">
                <img className="img-fluid" src="img/delivery--icon.png" alt="Caminhão e tempo" />
                <div className="content">
                  <h3 className="title">Fazemos entregas!</h3>
                  <div className="text">
                    <span>Frete a consultar</span>
                  </div>
                </div>
              </div>

              <div className="gradient-block white aceitamos-cartoes">
                <img className="img-fluid" src="img/payment--icon.png" alt="Mão segurando um cartão" />
                <div className="content">
                  <h3 className="title">Aceitamos cartões de crédito e débito</h3>
                  <div className="text">
                    <img className="img-fluid" src="img/cartoes.png" alt="Formas de pagamento" />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

        </Grid>
      </Page>
    )
  }
}

export default GasesIndustriais;
