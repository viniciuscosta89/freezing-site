import { createGlobalStyle } from 'styled-components'

const Blurb = createGlobalStyle`
  .blurb {
    display: flex;
    justify-content: space-between;

    &--image {
      margin-right: 3%;
      width: 25%;
    }

    &--text {
      text-align: justify;
      width: 75%;

      > .title {
        color: var(--gray);
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: .5rem;
      }
    }
  }
`

export default Blurb;
