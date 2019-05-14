import { createGlobalStyle } from 'styled-components'
import { center, fontArial, fontVerdana, fontUbuntu } from '../../styles/tools';

const Base = createGlobalStyle`
  body {
    background-color: #fff !important;
    ${fontArial}
    font-size: 16px;

    &::-webkit-scrollbar {
      width: 1rem;

      &-track {
        background-color: rgba(149, 230, 250, .25);
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }

      &-thumb {
        background-image: linear-gradient(to bottom, var(--light-blue), var(--primary-color));
        outline: 1px solid var(--secondary-color);
      }
    }
  }

  a {
    text-decoration: none;
  }

  #root {
    overflow: hidden;

    @media (max-width: 980px) {
      padding-top: 10rem;
    }
  }

  p {
    color: var(--gray);
    line-height: 1.5;
    margin-bottom: .5rem;
  }

  .main {
    min-height: 50vh;
  }

  .section {
    display: flex;
    justify-content: center;
  }

  .container {
    ${center}
    max-width: 1280px;
    width: 100%;

    @media (max-width: 1280px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media (max-width: 959px) {
      text-align: center;
    }
  }

  .font-eras {
    ${fontUbuntu}
  }

  .img-fluid {
    display: block;
    max-width: 100%;

    @media (max-width: 959px) {
      ${center}
    }
  }

  .no-dots {
    list-style: none;

    > li {
      color: var(--gray);
      line-height: 1.4;
      margin-bottom: .25rem;
    }
  }

  .list-hifen {
    list-style-type: none;
    text-align: left;

    > li {
      line-height: 1.4;
      margin-bottom: .1rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: "-";
        position: absolute;
        left: 0;
        top: -2px;
      }
    }
  }

  header {
    .header-item {
      color: var(--primary-color);
      ${fontVerdana}
      font-weight: bold;
      transition: all .5s ease-in-out;

      &:hover {
        cursor: pointer;
      }

      @media (min-width: 1280px) {
        font-size: 13px;
      }

      &::after {
        content: "";
        transition: all .5s ease-in-out;
        width: 0;
      }
    }

    .active {
      color: var(--light-blue);

      &::after {
        content: "";
        background-color: var(--light-blue);
        bottom: 0;
        height: 1px;
        left: 0;
        position: absolute;
        width: 100%;
      }
    }
  }

  .drawer {
    .header-item {
      color: var(--primary-color);
      font-family: "Verdana", "Helvetica", sans-serif;
      transition: all .5s ease-in-out;
    }

    .active {
      background-color: var(--secondary-color);
      color: var(--light-blue);
    }
  }

  &.blue {
    color: var(--light-blue2);
    font-weight: bold;
  }

  .btn {
    display: inline-block;
    padding: .25rem;

    &:hover {
      cursor: pointer;
    }

    &-default {
      background-color: #fff;
      border: 1px solid #ccc;
      color: #666;
      transition: all .5s ease-in-out;

      &:hover {
        background-color: #333;
        border-color: #333;
        color: #fff;

      }
    }
  }

  .width-50 {
    ${center}
    max-width: 50vw;
  }

  .letter-spacing--1 {
    letter-spacing: 1px;
  }

  .gradient-line {
    background-image: linear-gradient(to right, var(--primary-color), #fff);
    border: none;
    height: 1px;
    max-width: 100%;
  }

  .page {
    min-height: 70vh;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    transition: opacity 1s ease-in-out;
  }

  .page-enter {
    opacity: 0;
  }

  .page-enter-active {
    opacity: 1;
  }

  .page-exit {
    opacity: 0;
  }

  .page--prev.page-enter {
    opacity: 0;
  }

  .page--prev.page-enter-active {
    opacity: 1;
  }

  .page--prev.page-exit {
    opacity: 0;
  }
`

export default Base;
