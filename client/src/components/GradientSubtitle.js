import styled from "styled-components";

const GradientSubtitle = styled.h2`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 1rem;
  position: relative;
  text-transform: uppercase;

  @media (min-width: 1280px) {
    font-size: 25px;
  }

  &::before {
    content: "";
    background-image: linear-gradient(to right, #dbe7ee, #fff);
    display: block;
    height: 50%;
    position: absolute;
    width: 100%;
    z-index: 0;

    @media (min-width: 1280px) {
      left: -7%;
    }
  }

  > img {
    margin-right: .5rem;
    z-index: 1;
  }

  > span {
    background-image: linear-gradient(to right, var(--light-blue2), var(--primary-color));
    font-family: "Maven Pro", sans-serif;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }
`
export default GradientSubtitle;
