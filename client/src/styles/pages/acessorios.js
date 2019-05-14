import { createGlobalStyle } from 'styled-components'
import { fontArial, fontUbuntu } from '../../styles/tools';

const AcessoriosStyled = createGlobalStyle`
  .section {
    margin-bottom: 2.5rem;
  }

  .description {
    color: var(--primary-color);
    text-align: justify;
  }

  .cilinders {
    display: flex;
    flex-wrap: wrap;

    > .col {
      margin-bottom: 1rem;

      @media (min-width: 1024px) {
        &:first-child {
          margin-right: 1.5rem;
        }
      }

      &:last-child {
        flex: 1 1;
      }

      > .imgs {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;

        > .img {
          margin-right: 1.5rem;

          &:last-child {
            margin-right: 0;
          }
        }
      }

      > .content {
        > p {
          margin-bottom: .25rem;
          text-align: left;

          &:last-of-type {
            margin-bottom: 1.5rem;
          }
        }
      }
    }
  }

  .gradient-block {
    border-image: linear-gradient(to bottom, #bed4e0, var(--primary-color));
    border-image-slice: 1;
    border-style: solid;
    border-width: 1px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: .25rem;
    padding: .5rem;

    @media (min-width: 1280px) {
      min-width: 380px;
    }

    > .content {
      text-align: center;
      width: 90%;

      > .title {
        font-size: 20px;
        margin-bottom: .25rem;
        text-shadow: 0 0 2px rgba(0, 188, 212, 0.75);
        text-transform: uppercase;
      }

      > .text {
        ${fontUbuntu}
        font-size: 18px;
        letter-spacing: 1px;
        margin-bottom: 0.25rem;

        > a {
          display: block;
          margin: 0 0.5rem;
          transition: all .5s ease-in-out;

          @media (min-width: 1280px) {
            display: inline-block;
          }

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    &.blue {
      background-image: linear-gradient(to bottom, #fff, #c4e4f5);

      > .content {
        > .title {
          color: var(--primary-color);
        }

        > .text {
          > a {
            color: var(--primary-color);

            &:hover {
              color: var(--light-blue);
            }
          }
        }
      }
    }

    &.brown {
      background-image: linear-gradient(to bottom, #fff, var(--light-brown));

      > .content {
        > .title {
          color: var(--dark-brown);
          text-shadow: 0 0 2px var(--dark-brown);
        }

        > .text {
          > span {
            color: var(--dark-brown);
            ${fontArial}
            font-size: 16px;
          }
        }
      }
    }

    &.white {
      background-image: linear-gradient(to bottom, #fff, #eaeaea);

      > .content {
        > .title {
          color: var(--primary-color);
        }

        > .text {
          margin-top: .5rem;

          > img {
            margin: auto;
          }
        }
      }
    }
  }

  .no-bg {
    &::before {
      display: none;
    }

    > span {
      background-image: linear-gradient(45deg, var(--light-blue2), var(--primary-color));
    }
  }
`

export default AcessoriosStyled;
