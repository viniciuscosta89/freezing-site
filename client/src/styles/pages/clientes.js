import { createGlobalStyle } from 'styled-components'

const ClientesStyled = createGlobalStyle`
  .section {
    margin-bottom: 2.5rem;
  }

  .description {
    color: var(--primary-color);
    text-align: justify;
  }

  .clientes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    &--item {
      border-image: linear-gradient(to bottom, #bed4e0, var(--primary-color));
      border-image-slice: 1;
      border-style: solid;
      border-width: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 3%;
      padding: 1rem;

      &:hover {
        > img {
          transform: scale(1.1);

        }
      }

      > img {
        transition: all .5s ease-in-out;
      }


      @media (min-width: 768px) and (max-width: 1023px) {
        width: calc(25% - 3%);

        &:not(:nth-child(4n + 4)) {
          margin-right: 3%;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      @media (min-width: 1024px) {
        width: calc(20% - 3%);

        &:not(:nth-child(5n + 5)) {
          margin-right: 3%;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`

export default ClientesStyled;
