import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet";
import PageTitle from "../components/PageTitle";
import ContatoStyled from "../styles/pages/contato.js";
import axios from "axios";

class Contato extends Component {
  state = {
    name: '',
    email: '',
    texto: '',
    buttonText: 'Enviar',
    sent: false
  }

  handleChange = e => {
    this.setState( { [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      buttonText: "...enviando"
    })

    let {name, email, texto} = this.state

    axios.post('/api/form', {
      name, email, texto
    })
      .then(res => {
        this.setState({ sent: true }, this.resetForm())
        console.log(res)
      })
      .catch(() => {
        this.setState({ buttonText: 'Erro ao enviar mensagem',})
        console.log('Mensagem não enviada')
      })
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      texto: '',
      buttonText: 'Mensagem enviada!',
    })
  }

  render() {
    return (
      <Page>
        <Helmet>
          <title>Contato | Freezing</title>
        </Helmet>
        <CssBaseline />
        <ContatoStyled />
        <section className="section">
          <Grid container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>Contato</span></PageTitle>
            </Grid>
          </Grid>
        </section>

        <section className="section">
          <Grid container className="container" spacing={32}>
            <Grid item container md={8} spacing={32}>
              <Grid item xs={12} sm={6}>
                <div className="contato--item">
                  <img className="img-fluid" src="img/phone-icon.png" alt="Ícone de Telefone" />
                  <div className="content">
                    <h2 className="title min-height--52">Fale Conosco</h2>
                    <a href="tel:01144494607" rel="noopener noreferrer">(11) 4449-4607</a>
                    <a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="contato--item">
                  <img className="img-fluid" src="img/shopping-cart--icon.png" alt="Ícone de carrinho de compras" />
                  <div className="content">
                    <h2 className="title">Faça seu pedido<br />Freezing Gases</h2>
                    <a href="tel:01144494607" rel="noopener noreferrer">(11)  4449-4607</a>
                    <a href="tel:011958966939" rel="noopener noreferrer">(11) 95896-6939</a>
                    <a href="mailto:gases@freezing.com.br" target="_blank" rel="noopener noreferrer">gases@freezing.com.br</a>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12}>
                <hr className="gradient-line" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="contato--item">
                  <img className="img-fluid" src="img/delivery-blue--icon.png" alt="Ícone de Entregas" />
                  <div className="content">
                    <h2 className="title">Fazemos entregas!</h2>
                    <span>Frete a consultar</span>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="contato--item">
                  <img className="img-fluid" src="img/sp--icon.png" alt="Ícone de SP" />
                  <div className="content">
                    <h2 className="title">Atendemos<br />Grande São Paulo</h2>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12}>
                <hr className="gradient-line" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="contato--item">
                  <img className="img-fluid" src="img/payment--icon.png" alt="Ícone de Pagamentos" />
                  <div className="content">
                    <h2 className="title no-margin-bottom">Aceitamos cartões<br />de crédito e débito</h2>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="contato--item">
                  <img className="img-fluid" src="img/cartoes.png" alt="Ícone de Telefone" />
                </div>
              </Grid>

              <Grid item xs={12}>
                <hr className="gradient-line" />
              </Grid>

            </Grid>

            <Grid item xs={12} md={4}>
              <div className="form-wrap">
                <div className="form-wrap--header">
                  <h2 className="title">Formulário de contato</h2>
                </div>

                <div className="form-wrap--body">
                  <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />

                    <label for="texto">Texto</label>
                    <textarea id="texto" name="texto" value={this.state.texto} onChange={this.handleChange}></textarea>

                    <button className="btn btn-default" type="submit">{this.state.buttonText}</button>

                    <div className="email-status">
                      {this.state.mailSent &&
                        <span className="email-status--sent">Obrigado por entrar em contato.</span>
                      }
                    </div>
                  </form>
                </div>
              </div>

            </Grid>
          </Grid>
        </section>
      </Page>
    )
  }
}

export default Contato;
