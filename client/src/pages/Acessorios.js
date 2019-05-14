import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet";
import PageTitle from "../components/PageTitle";
import GradientSubtitle from "../components/GradientSubtitle";
import AcessoriosStyled from "../styles/pages/acessorios.js";

class Acessorios extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Acessórios | Freezing</title>
        </Helmet>
        <CssBaseline />
        <AcessoriosStyled />
        <section className="section">
          <Grid container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>Acessórios para Gases Industriais</span></PageTitle>
            </Grid>
          </Grid>
        </section>

        <section className="section">
          <Grid container className="container" spacing={32}>
            <Grid item xs={12}>
              <p className="description">Trabalhamos com fornecimento de gases industriais, locações de cilindros e acessórios consumíveis para solda em geral.</p>
            </Grid>
          </Grid>
        </section>

        <section className="section">
          <Grid container className="container" spacing={32}>
            <Grid className="cilinders" item container xs={12}>

              <div className="col">
                <img className="img-fluid" src="img/acessorios/acessorios-01.jpg" alt="Acessórios para Gases Industriais" />
              </div>

              <div className="col">
                <div className="imgs">
                  <img className="img-fluid" src="img/acessorios/acessorios-02.jpg" alt="Acessórios para Gases Industriais" />
                </div>
                <div className="content">
                  <Grid item container spacing={32}>
                    <Grid item sm={6}>
                      <GradientSubtitle className="no-bg">
                        <span>Acessórios</span>
                      </GradientSubtitle>
                      <p>Fornecemos peças como:</p>
                      <ul className="list-hifen blue">
                        <li>Reguladores</li>
                        <li>Vávulas</li>
                        <li>Carrinhos</li>
                        <li>Mangueiras</li>
                        <li>Extensões para Maçarico</li>
                        <li>Maçaricos</li>
                        <li>Conjunto de Solda</li>
                        <li>Varetas de Solda</li>
                        <li>Arame Mig</li>
                        <li>Eletrodo</li>
                      </ul>
                    </Grid>

                    <Grid item sm={6}>
                      <div className="gradient-block blue faca-seu-pedido">
                        <img className="img-fluid" src="img/shopping-cart--icon.png" alt="Carrinho de Compras" />
                        <div className="content">
                          <h3 className="title">Faça seu pedido</h3>
                          <div className="text">
                            <a href="tel:011958966939" target="_blank" rel="noopener noreferrer">(11) 95896-6939</a>
                            <a href="tel:01144494607" target="_blank" rel="noopener noreferrer">(11) 4449-4607</a>
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
                </div>
              </div>
            </Grid>
          </Grid>

        </section>
      </Page>
    )
  }
}

export default Acessorios;
