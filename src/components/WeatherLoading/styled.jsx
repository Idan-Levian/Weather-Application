import styled from 'styled-components';
import * as H from './helpers';

export const Drop = styled.span.attrs(() => ({
  className: 'drop',
}))`
  opacity: 1;
  background: #9ea1a4;
  display: block;
  float: left;
  width: 3px;
  height: 10px;
  margin-left: 4px;
  border-radius: 0px 0px 6px 6px;

  animation-name: drop;
  animation-duration: 350ms;
  animation-iteration-count: infinite;

  @keyframes drop {
    50% {
      height: 45px;
      opacity: 0;
    }

    51% {
      opacity: 0;
    }

    100% {
      height: 1px;
      opacity: 0;
    }
  }
`;

export const Rain = styled.div.attrs(() => ({
  className: 'rain',
}))`
  position: absolute;
  width: 70px;
  height: 70px;
  margin-top: -32px;
  margin-left: 19px;

  ${(props) => H.dropsAnimations(props.children)}
`;

export const Text = styled.div.attrs(() => ({
  className: 'text',
}))`
  font-family: Helvetica, 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  margin-left: -43px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 11px;
  color: #a0a0a0;
  width: 200px;
`;

export const WeatherLoading = styled.div.attrs(() => ({
  className: 'preloader',
}))`
  .preloader {
    position: absolute;
    margin-left: -55px;
    margin-top: -100px;
    height: 110px;
    width: 110px;
    left: 50%;
    top: 50%;
  }

  svg {
    width: 110px;
    height: 110px;
  }

  path {
    stroke: #9ea1a4;
    stroke-width: 0.25;
    fill: #241e20;
  }

  #cloud {
    position: relative;
    z-index: 2;
  }

  #cloud path {
    fill: ${({ cloudColor }) => cloudColor};
  }

  #sun {
    margin-left: -10px;
    margin-top: 6px;
    opacity: 0;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 45px;
    top: 15px;
    z-index: 1;

    animation-name: rotate;
    animation-duration: 16000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #sun path {
    stroke-width: 0.18;
    fill: ${({ sunColor }) => sunColor};
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
`;

// ${(props) => console.log(typeof parseInt(props.children[0].key))}
