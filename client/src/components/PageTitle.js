import styled from "styled-components";

const PageTitle = styled.h1`
  color: var(--light-blue);
  font-size: 25px;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-transform: uppercase;

  &::after {
    background-image: linear-gradient(to right, var(--primary-color), #fff);
    content: "";
    display: block;
    height: 1px;
    left: 25%;
    opacity: .45;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: 0;

    @media (min-width: 1280px) {
      left: 0%;
      width: 80%;
    }
  }

  > span {
    background-color: #fff;
    display: inline-block;
    padding: 0 1rem 0 0;
    position: relative;
    z-index: 1;
  }
`
export default PageTitle;
