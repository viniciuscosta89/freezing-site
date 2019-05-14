import { createGlobalStyle } from 'styled-components'

const ServicosStyled = createGlobalStyle`
  .section {
    margin-bottom: 4rem;
  }

  p {
    text-align: justify;
  }

  .img-fluid {
    @media (min-width: 1280px) {
      max-width: none !important;
      position: relative;
      z-index: 1;
    }
  }

  .instalacao-equipamentos {
    .list-hifen {
      @media (min-width: 1280px) {
        position: relative;
        margin-top: 2rem;
      }
    }

    .left-space {
      @media (min-width: 1280px) {
        padding-left: 15rem;
      }
    }
  }

.left-space {
  @media (min-width: 1280px) {
    padding-left: 10rem;
  }
}
`

export default ServicosStyled;
