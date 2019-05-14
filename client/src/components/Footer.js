import React, { Component, Fragment } from "react";
import MenuItems from "./MenuItems";
import Grid from '@material-ui/core/Grid';
import FooterStyled from '../styles/components/footer.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faPhone)

class Footer extends Component {
  state = {
    width: window.innerWidth
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isDesktop = width >= 960;

    const footerDesktop = (
      <Fragment>
        <Grid container justify="flex-start" spacing={40}>
          <Grid item xs={12}>
            <img className="img-fluid footer-logo" src="img/logo-white.png" alt="Freezing Logo Branco" />
          </Grid>
        </Grid>

        <Grid container spacing={40} alignItems="center" wrap="nowrap">
          <Grid item className="footer__custom-column">
            <div className="social-networks">
              <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook-square']} /> <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} /> <span>LinkedIn</span>
              </a>
              <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} /> <span>Twitter</span>
              </a>
            </div>
          </Grid>

          <hr />

          <Grid item className="footer__custom-column">
            <div className="freezing-contact align-top">
              <h2>Freezing Ar Condicionado</h2>
              <a className="font-eras letter-spacing--1" href="tel:01144494607" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone} /> (11) 4449.4607</a>
              <a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a>
            </div>
          </Grid>

          <hr />

          <Grid item className="footer__custom-column">
            <div className="freezing-contact">
              <h2>Freezing Gases</h2>
              <a className="font-eras letter-spacing--1" href="tel:01144494607" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone} /> (11) 4449.4607</a>
              <a className="font-eras letter-spacing--1" href="https://api.whatsapp.com/send?phone=5511958966939" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'whatsapp']} /> (11) 95896-6939</a>
              <a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a>
            </div>
          </Grid>

          <hr />

          <Grid item className="footer__custom-column">
            <div className="menu-items">
              <MenuItems />
            </div>
          </Grid>

          <Grid item md={5}>
            <div className="copyright">
              <span>Powered By SPEEDmidia</span>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    )

    const footerMobile = (
      <Grid container spacing={32}>
        <Grid item xs={12}>
          <img className="img-fluid footer-logo" src="img/logo-white.png" alt="Freezing Logo Branco" />
          <div className="social-networks">
            <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} /> <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} /> <span>LinkedIn</span>
            </a>
            <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} /> <span>Twitter</span>
            </a>
          </div>

          <div className="menu-items">
            <MenuItems />
          </div>

          <hr />

          <div className="freezing-contact">
            <h2>Freezing Ar Condicionado</h2>
            <a className="font-eras letter-spacing--1" href="tel:01144494607" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone} /> (11) 4449.4607</a>
            <a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a>
          </div>

          <hr />

          <div className="freezing-contact">
            <h2>Freezing Gases</h2>
            <a className="font-eras letter-spacing--1" href="tel:01144494607" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone} /> (11) 4449.4607</a>
            <a className="font-eras letter-spacing--1" href="https://api.whatsapp.com/send?phone=5511958966939" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'whatsapp']} /> (11) 95896-6939</a>
            <a href="mailto:freezing@freezing.com.br" target="_blank" rel="noopener noreferrer">freezing@freezing.com.br</a>
          </div>

          <div className="copyright">
            <span>Powered By SPEEDmidia</span>
          </div>

        </Grid>
      </Grid>
    )

    if (isDesktop) {
      return (
        <Fragment>
          <FooterStyled />
          <Grid container className="footer" component="footer">
            <Grid className="container">
              {footerDesktop}
            </Grid>
          </Grid>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <FooterStyled />
          <Grid container className="footer" component="footer">
            {footerMobile}
          </Grid>
        </Fragment>
      );
    }
  }
}

export default Footer;
