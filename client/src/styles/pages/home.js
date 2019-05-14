import { createGlobalStyle } from 'styled-components'
import { fontMaven } from '../../styles/tools'

const HomeStyled = createGlobalStyle`
  .section {
    margin-bottom: 3rem;
    text-align: center;

    &__block {
      margin-bottom: 4rem;

      > .subtitle {
        color: var(--light-blue);
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 2.5rem;
        position: relative;
        text-transform: uppercase;

        &.has-line {
          &::before {
            background-image: linear-gradient(to right, #fff, var(--gray-blue), #fff);
            content: "";
            display: block;
            height: 1px;
            position: absolute;
            top: 50%;
            width: 100%;
            z-index: 0;
          }

          > span {
            background-color: #fff;
            display: inline-block;
            padding: 0 1rem;
            position: relative;
            z-index: 1;
          }
        }
      }

      > p {
        color: var(--light-gray);
        font-size: 1.25rem;
        line-height: 1.4;
        text-align: justify;
      }
    }
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 960px) {
      justify-content: center;
    }

    @media (max-width: 959px) {
      justify-content: center;
    }

    &__card {
      align-items: flex-start;
      display: inline-flex;
      position: relative;
      transition: all .5s ease-in-out;

      @media (min-width: 960px) {
        margin: 0 0.5rem;
        max-width: calc(97% / 3);
      }

      @media (max-width: 959px) {
        margin-bottom: 1rem;
      }

      &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.25);
        transform: scale(1.05);
        z-index: 1;
      }

      > .highlights__card--text {
        bottom: 10px;
        ${fontMaven}
        max-width: 80%;
        position: absolute;
        right: 10px;
        text-align: right;

        > .title {
          color: var(--primary-color);
          font-size: 20px;
          font-weight: bolder;
          margin-bottom: .5rem;
          text-shadow: 0 0px 5px rgba(255, 255, 255, 1);
        }

        > .description {
          color: var(--gray-blue);
          font-size: 14px;
          font-weight: bold;
          text-shadow: 0 0px 3px rgba(255, 255, 255, 1);
        }
      }
    }
  }

  .servicos {

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__item {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: .5rem;

      @media (min-width: 960px) {
        margin: 0 2.5rem 1rem;
      }

      @media (max-width: 959px) {
        flex: 1 1 100%;
        margin: 0 auto 1rem;
      }

      > img {
        margin-bottom: .5rem;
      }

      &--img {
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
        width: 150px;
        height: 150px;
        transition: all .5s ease-in-out;
      }

      > .instalacao {
        background-image: url("../img/home/instalacao-icon.png");
      }

      > .manutencao {
        background-image: url("../img/home/manutencao-icon.png");
      }

      > .preventiva {
        background-image: url("../img/home/preventiva-icon.png");
      }

      > .deteccao {
        background-image: url("../img/home/deteccao-icon.png");
      }

      > .fornecimento {
        background-image: url("../img/home/fornecimento-icon.png");
      }

      > .title {
        color: var(--light-gray);
        ${fontMaven}
        font-size: 18px;
        text-transform: uppercase;
        transition: all .5s ease-in-out;
      }

      &:hover {
        > .instalacao {
          background-image: url("../img/home/instalacao-icon-color.png");
        }

        > .manutencao {
          background-image: url("../img/home/manutencao-icon-color.png");
        }

        > .preventiva {
          background-image: url("../img/home/preventiva-icon-color.png");
        }

        > .deteccao {
          background-image: url("../img/home/deteccao-icon-color.png");
        }

        > .fornecimento {
          background-image: url("../img/home/fornecimento-icon-color.png");
        }

        .title {
          color: var(--primary-color);
        }
      }
    }
  }

  .marcas {
    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media (min-width: 960px) {
        justify-content: space-between;
      }
    }

    &__item {
      margin: 0 1rem 1rem;
    }
  }
`

export default HomeStyled;
