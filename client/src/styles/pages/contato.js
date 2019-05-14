import { createGlobalStyle } from 'styled-components'
import { fontArial, fontUbuntu } from '../../styles/tools'

const ContatoStyled = createGlobalStyle`
  .section {
    margin-bottom: 2.5rem;
  }

  .contato--item {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    @media (max-width: 599px) {
      flex-wrap: wrap;
    }

    > .content {
      width: 100%;

      @media (min-width: 600px) {
        width: 75%;
      }

      > .title {
        color: var(--primary-color);
        font-size: 20px;
        line-height: 1.3;
        margin-bottom: 1rem;
        text-transform: uppercase;

        &.min-height--52 {
          @media (min-width: 600px) {
            min-height: 52px;
          }
        }

        &.no-margin-bottom {
          margin-bottom: 0;
        }
      }

      > a {
        color: var(--primary-color);
        display: block;
        ${fontUbuntu}
        font-size: 18px;
        letter-spacing: 2px;
        line-height: 1.5;
        transition: all .5s ease-in-out;
        white-space: pre-wrap;

        @media (max-width: 959px) {
          padding: .25rem;
        }

        &:hover {
          color: var(--light-blue);
        }
      }

      > span {
        color: var(--primary-color);
      }
    }
  }

  .form-wrap {
    background-color: #d8d8d8;
    padding: .5rem .25rem .25rem;

    &--header {
      margin-bottom: .5rem;
      text-align: center;

      > .title {
        color: #fff;
        font-size: 20px;
        text-shadow: 0 2px 1px rgba(0,0,0,0.25);
        text-transform: uppercase;
      }
    }

    &--body {
      background-color: #fff;
      padding: 1.5rem;
    }
  }

  .form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    > label {
      color: #666;
      font-size: 12px;
      margin-bottom: .25rem;
    }

    > input:not(.btn) {
      border: 1px solid #ccc;
      margin-bottom: .5rem;
      padding: .5rem;
      transition: all .5s ease-in-out;
      width: 100%;

      &:hover {
        border-color: #999;
      }

      &:focus {
        border-color: #666;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    > textarea {
      border: 1px solid #ccc;
      ${fontArial}
      margin-bottom: .25rem;
      padding: .5rem;
      min-height: 200px;
      transition: all .5s ease-in-out;
      width: 100%;

      &:hover {
        border-color: #999;
      }

      &:focus {
        border-color: #666;
      }
    }

    > .email-status {
      &--sent {
        color: green;
        ${fontUbuntu}
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`

export default ContatoStyled;
