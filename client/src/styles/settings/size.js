import {
  createGlobalStyle
} from 'styled-components';

const GlobalSize = createGlobalStyle `
  :root {
    --spacing-small: 1rem;
    --spacing-medium: 2rem;
    --spacing-big: 3rem;
    --radius: 4px;
  }
`
export default GlobalSize;
