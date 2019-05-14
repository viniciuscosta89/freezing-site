import React, { Component, Fragment } from "react";
import MenuItems from "./MenuItems";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import HeaderStyled from '../styles/components/header.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faPhone)

const styles = {
  menuButton: {
    color: "white",
    marginRight: 20,
    padding: 0
  },

  headerDesktop: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "3rem"
  },

  mainHeader: {
    background: "url('img/bg-header-desktop.png') center top/auto no-repeat",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    padding: "1rem",
    width: "100%"
  },

  toolbar: {
    alignItems: "flex-start",
    background: "url('img/bg-ondas.png') center bottom/cover no-repeat",
    flexGrow: 1,
    justifyContent: "space-between",
    marginBottom: "1rem",
    paddingTop: "1rem",
    paddingBottom: "3rem"
  },

  toolbarDesktop: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    marginBottom: "3rem"
  },

  menuDesktop: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    margin: "0 -16px"
  }
};

class Header extends Component {
  state = {
    anchorEl: null,
    drawer: false,
    mobileMoreAnchorEl: null,
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
  }

  toggleDrawer = (drawer, open) => () => {
    this.setState({ drawer: open });
  };

  render() {
    const { classes } = this.props;
    const { width } = this.state;
    const isDesktop = width >= 960;

    const renderMenu = (
      <Grid item className={classes.menuDesktop}>
        <MenuItems />
      </Grid>
    );

    const renderMobileMenu = (
      <Drawer className="drawer" open={this.state.drawer} onClose={this.toggleDrawer("drawer", false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          <MenuItems />
        </div>
      </Drawer>
    );

    const headerDesktop = (
      <AppBar className={classes.headerDesktop} position="static" component="header" color="default" elevation="0">
        <div className={classes.mainHeader}>
          <Grid className="container" container spacing={32}>
            <Grid item className={classes.toolbarDesktop}>
              <div className="logo">
                <img className="img-fluid" src="img/logo.png" alt="Freezing Logo" />
              </div>
              <ul className="contact-list">
                <li><a href="tel:01144494607" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPhone} /> (11)   4449-4607</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5511958966939" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} /> (11) 95896-6939</a></li>
                <li><a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a></li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <Grid className="container" container spacing={32}>
          {renderMenu}
        </Grid>
      </AppBar>
    )

    const headerMobile = (
      <Fragment component="null">
        <AppBar className="header" position="fixed" component="header" color="default" elevation="0">
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} aria-label="Menu" onClick={this.toggleDrawer("drawer", true)}
              color="inherit">
              <MenuIcon fontSize="large"/>
            </IconButton>
            {renderMobileMenu}

            <ul className="contact-list">
              <li><a href="tel:01144494607" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPhone} /> (11)   4449-4607</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5511958966939" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} /> (11) 95896-6939</a></li>
              <li><a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a></li>
            </ul>
          </Toolbar>
        </AppBar>
      </Fragment>
    )

    if (isDesktop) {
      return (
        <Fragment>
          <CssBaseline />
          <HeaderStyled />

          {headerDesktop}

        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <CssBaseline />
          <HeaderStyled />

          {headerMobile}

        </Fragment>
      );
    }
  }
}

export default withStyles(styles)(Header);
