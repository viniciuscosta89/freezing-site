import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"
import Acessorios from "../pages/Acessorios";
import Clientes from "../pages/Clientes";
import Contato from "../pages/Contato";
import Empresa from "../pages/Empresa";
import Fabricantes from "../pages/Fabricantes";
import GasesIndustriais from "../pages/GasesIndustriais";
import Servicos from "../pages/Servicos";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from "../pages/Home.js";

class Main extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <main className="main">
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 1000,
                    exit: 1000,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route
                          exact
                          path="/"
                          component={Home}
                        />

                        <Route
                          path="/empresa"
                          component={Empresa}
                        />

                        <Route
                          path="/servicos"
                          component={Servicos}
                        />

                        <Route
                          path="/gases-industriais"
                          component={GasesIndustriais}
                        />

                        <Route
                          path="/acessorios"
                          component={Acessorios}
                        />

                        <Route
                          path="/clientes"
                          component={Clientes}
                        />

                        <Route
                          path="/fabricantes"
                          component={Fabricantes}
                        />

                        <Route
                          path="/contato"
                          component={Contato}
                        />

                        {/* <Route
                          component={Error404}
                        /> */}
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
          {/* <Route path="/empresa" component={Empresa} /> */}
          {/* <Route path="/servicos" component={Servicos} />
          <Route path="/gases-industriais" component={GasesIndustriais} />
          <Route path="/acessorios" component={Acessorios} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/fabricantes" component={Fabricantes} />
          <Route path="/contato" component={Contato} /> */}
      </main>
    )
  }
}

export default Main;
