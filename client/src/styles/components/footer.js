import { createGlobalStyle } from 'styled-components'
import { center, fontArial } from '../../styles/tools'

const FooterStyled = createGlobalStyle`
  .footer {
    background: url("img/bg-footer-mobile.png") center top/cover no-repeat;

    @media (min-width: 960px) {
      background: url("img/bg-footer-desktop.png") center top/cover no-repeat;
      font-size: 14px;
      padding: 4rem 1rem 2rem;
      text-align: left;

      > .container {
        flex-grow: 1;
      }
    }

    @media (min-width: 600px) and (max-width: 959px) {
      padding: 7rem 1rem 1rem;
      text-align: center;
    }

    @media (max-width: 599px) {
      padding: 5rem 1rem 1rem;
    }

    img {
      @media (max-width: 959px) {
        ${center}
      }
    }

    a {
      color: #fff;
      ${fontArial}
      transition: all .5s ease-in-out;

      &:hover {
        background-color: transparent;
        color: var(--secondary-color);
      }

      @media (min-width: 960px) {
        font-size: 14px;
      }
    }

    h2 {
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 1rem;
      text-transform: uppercase;

      @media (min-width: 960px) {
        font-size: 12px;
        font-weight: 500;
      }

      @media (max-width: 959px) {
        font-size: 1rem;
        font-weight: normal;
      }
    }

    .footer__custom-column {
      padding-left: 30px !important;
      padding-right: 30px !important;
    }
  }

  .footer-logo {
    margin-bottom: 1.5rem;
  }

  .social-networks {
    display: flex;
    justify-content: center;

    @media (min-width: 960px) {
      align-items: center;
      flex-direction: column;
    }

    @media (max-width: 959px) {
      margin-bottom: 3.25rem;
    }

    a {
      ${fontArial}
      font-size: 1.25rem;
      margin: 0 .5rem;
      padding: .5rem;

      > span {
        display: none;
      }
    }
  }

  .menu-items {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 960px) {
      align-items: flex-start;
    }

    > a {
      @media (min-width: 960px) {
        font-size: 12px;
        padding: 0;
      }

      @media (max-width: 959px) {
        padding: 0.25rem;
      }
    }
  }

  hr {
    @media (min-width: 960px) {
      border-color: var(--secondary-color);
      border-width: 0 1px 0 0;
      height: 12rem;
    }

    @media (max-width: 959px) {
      border-color: #fff;
      border-width: 1px 0 0;
      margin: 2rem auto;
      max-width: 50%;
    }

  }

  .freezing-contact {
    display: flex;
    flex-direction: column;

    @media (min-width: 960px) {
      align-items: flex-start;
    }

    @media (max-width: 959px) {
      align-items: center;
    }

    > a {
      padding: .25rem 0;
    }

    .svg-inline--fa {
      color: var(--secondary-color);
    }

    &.align-top {
      margin-top: -22px;
    }
  }

  .copyright {
    color: #fff;
    font-size: 11px;

    @media (min-width: 960px) {
      text-align: right;
    }

    @media (max-width: 959px) {
      margin: 4rem auto 1rem;
      text-align: center;
    }
  }
`

export default FooterStyled;
