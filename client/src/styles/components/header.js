import { createGlobalStyle } from 'styled-components'
import { fontUbuntu } from '../../styles/tools'

const HeaderStyled = createGlobalStyle`
  .header {
    background-color: transparent !important;

    > img {
      display: block;
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  .logo {
    position: relative;

    @media (min-width: 1024px) and (max-width: 1279px) {
      max-width: 30%;
      top: 60%;
    }

    @media (min-width: 1280px) and (max-width: 1439px) {
      left: 7%;
      top: 50%;
    }

    @media (min-width: 1440px) and (max-width: 1679px) {
      left: 7%;
      top: 45%;
    }

    @media (min-width: 1680px) and (max-width: 1919px) {
      left: 7%;
      top: 50%;
    }

    @media (min-width: 1920px) {
      left: 7%;
      top: 50%;
    }
  }

  .contact-list {
    color: white;
    margin: 0;
    list-style: none;
    text-align: right;
    ${fontUbuntu}
    font-weight: 500;

    > li {
      margin-bottom: 0.25rem;

      &:last-child {
        margin-bottom: 0;
      }

      &:nth-child(-n + 2) {
        letter-spacing: 2px;
      }

      > a {
        align-items: center;
        color: #fff;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        transition: all .5s ease-in-out;
        white-space: pre-wrap;

        &:hover {
          color: var(--secondary-color);
        }

        i {
          color: var(--secondary-color);
        }
      }
    }
  }
`

export default HeaderStyled;
