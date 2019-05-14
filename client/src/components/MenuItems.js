import React, { Component, Fragment } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

class MenuItems extends Component {
  state = {
    selectedIndex: 0,
    drawer: false,
  };

  toggleDrawer = (drawer, open) => () => {
    this.setState({ drawer: open });
  };

  render() {
    return (
      <Fragment>
        <MenuItem className={`header-item`} onClick={(event) => { this.toggleDrawer("drawer", false)}} component={NavLink} exact to={{ pathname: '/', state: { prev: true } }} >Home</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/empresa', state: { prev: true }}} >Empresa</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/servicos', state: { prev: true }}}>Serviços</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/gases-industriais', state: { prev: true }}}>Gases Industriais</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/acessorios', state: { prev: true }}}>Acessórios</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/clientes', state: { prev: true }}}>Clientes</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/fabricantes', state: { prev: true }}}>Fabricantes</MenuItem>
        <MenuItem className={`header-item`} onClick={(event) => {this.toggleDrawer("drawer", false)}} component={NavLink} to={{ pathname: '/contato', state: { prev: true }}}>Contato</MenuItem>
      </Fragment>
    )
  }
}

export default MenuItems;
