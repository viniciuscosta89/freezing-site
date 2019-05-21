import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Page from '../components/Page';
import Helmet from "react-helmet"

import PageTitle from "../components/PageTitle";
import GradientSubtitle from "../components/GradientSubtitle";
import ServicosStyled from "../styles/pages/servicos.js";

class Servicos extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Serviços | Freezing</title>
        </Helmet>
        <CssBaseline />
        <ServicosStyled />
        <Grid className="section" container justify="center" component="section">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12}>
              <PageTitle><span>Serviços</span></PageTitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid id="instalacao-equipamentos" className="section instalacao-equipamentos" component="section" container justify="center">
          <Grid item container className="container" spacing={32}>
            <Grid item xs={12} sm={4}>
              <img className="img-fluid" src="img/servicos/instalacao-equipamentos.png" alt="Instalação de Equipamentos" />
            </Grid>

            <Grid item xs={12} sm={8}>
              <GradientSubtitle>
                <img src="img/servicos/instalacao-equipamentos--icon.png" alt="Ícone de ferramentas" /> <span>Instalação de Equipamentos</span>
              </GradientSubtitle>
              <p>Nosso time é composto por uma equipe técnica treinada e certificada englobando também, para total comodidade do cliente. Desenvolvemos e implantamos projetos de instalação para qualquer sistema de ar condicionado. Usamos somente tubulação de cobre.</p>
              <div className="left-space">
                <ul className="list-hifen blue">
                  <li>Instalação e infraestrutura de ar condicionado para sistema Split e Multi Split</li>
                  <li>Sistema de Ventialação Mecânica</li>
                  <li>Sistema VRV</li>
                  <li>Contratos de Manutenção Preventiva</li>
                  <li>Mudança de Layout</li>
                  <li>Assistência Técnica</li>
                </ul>
              </div>
            </Grid>

          </Grid>
        </Grid>

        <Grid id="manutencao-preventiva" className="section manutencao-preventiva" component="section" container justify="center">
          <Grid item container className="container">
            <Grid item xs={12} sm={4}>
              <img className="img-fluid" src="img/servicos/manutencao-preventiva.png" alt="Manutenção Preventiva" />
            </Grid>

            <Grid item xs={12} sm={8}>
              <GradientSubtitle>
                <img src="img/servicos/manutencao-preventiva--icon.png" alt="Ícone de ferramentas" /> <span>Manutenção Preventiva</span>
              </GradientSubtitle>
              <p>A Manutenção Preventiva de ar condicionado tem como objetivo garantir um funcionamento contínuo dos equipamentos, prolongar sua vida útil, garantir a qualidade do ar de seu ambiente, mantendo-os dentro dos padrões operacionais, conforme as determinações do Ministério da Saúde através da PORTARIA N.º 3523/98 com resolução RE.176 e RE 09 de 16/01/2003 da VIGILÂNCIA SANITÁRIA, que estabelece os parâmetros necessários para a Qualidade do Ar de Interiores em ambientes climatizados para prevenir a Síndrome dos Edifícios Doentes.</p>
              <div className="left-space">
                <p>A manutenção preventiva é baseada na Implantação do PMOC (Plano de Manutenção Operação e Controle) pois aparentemente, já não se vive sem ar condicionado. O sistema está presente nos shoppings, empresas, residências, bancos, restaurantes, estúdios, hospitais, aeroportos, hotéis, e muito mais. Diante desta realidade a Freezing Ar Condicionado está apta a oferecer as soluções técnicas mais adequadas de acordo com as necessidades de cada cliente.</p>
                <p className="blue">Vantagens:</p>
                <ul className="list-hifen blue">
                  <li>Prolongamento da vida útil dos equipamentos;</li>
                  <li>Manter os equipamentos limpos evitando a concentração de fungos e bactérias;</li>
                  <li>Evitar falhas repentinas reduzindo o custo com a troca de peças;</li>
                  <li>Redução do consumo de energia;</li>
                  <li>Melhoria na qualidade do ar interno</li>
                </ul>
              </div>
            </Grid>

          </Grid>
        </Grid>

        <Grid id="manutencao-corretiva" className="section manutencao-corretiva" component="section" container justify="center">
          <Grid item container className="container">
            <Grid item xs={12} sm={4}>
              <img className="img-fluid" src="img/servicos/manutencao-corretiva.png" alt="Manutenção Corretiva" />
            </Grid>

            <Grid item xs={12} sm={8}>
              <GradientSubtitle>
                <img src="img/servicos/manutencao-corretiva--icon.png" alt="Ícone de ferramentas" /> <span>Manutenção Corretiva</span>
              </GradientSubtitle>
              <p>O serviço consiste em manutenção emergencial na empresa ou comércio. É o processo de analise técnica mais detalhada por motivos de uma parada no sistema do equipamento, muitas vezes a falta da manutenção preventiva faz com que isto aconteça, equipamento mal conservado por muito tempo.</p>
              <p>A manutenção do ar condicionado corretiva tem a função de fazer todos os tipos de consertos e reparos nos equipamentos de ar condicionado, no próprio local ou em nossa oficina de reparo.</p>
              <p>A prevenção é sempre o melhor caminho para evitar emergências. Se você não sabe exatamente como planejar sua manutenção, conte com o nosso suporte. Só uma empresa credenciada nas maiores e melhores empresas, podem oferecer tranquilidade, qualidade e conforto.</p>
            </Grid>

          </Grid>
        </Grid>
      </Page>
    )
  }
}

export default Servicos;
