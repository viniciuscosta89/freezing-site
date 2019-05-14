import { createGlobalStyle } from 'styled-components'

const BlurbInline = createGlobalStyle`
  .blurb-inline {
    display: flex;
    justify-content: space-between;
    min-height: 105px;

    @media (max-width: 599px) {
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    &--img {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-right: 3%;
      width: 100%;

      @media (min-width: 960px) {
        width: 12%;
      }

      @media (max-width: 599px) {
        margin-bottom: 1rem;
      }
    }

    > .text {
      align-items: center;
      background-color: #eff4f8;
      color: var(--gray);
      display: flex;
      line-height: 1.5;
      padding: 1rem;
      text-align: justify;
      width: 100%;

      @media (min-width: 960px) {
        width: 88%;
      }
    }
  }
`

export default BlurbInline;
