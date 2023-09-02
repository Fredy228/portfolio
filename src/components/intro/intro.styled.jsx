import styled, { keyframes } from 'styled-components';
import bg_img from 'img/intro.webp';

export const IntroWrapper = styled.div`
  width: 100%;
  background-image: url(${bg_img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LangBtn = styled.button`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #fff;
  color: #fff;
  transition-duration: 350ms;
  transition-property: color, background-color;
  transition-timing-function: ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const AvatarImg = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const NameText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin-top: 30px;
  font-size: 32px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`;

export const IsMe = styled.h2`
  color: #fff;
  margin-top: 15px;
  font-size: 25px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const arrowAnim = keyframes`
    0% {
        transform: translateY()(0);
    }
    20% {
        transform: translateY(15px);
    }
    40% {
        transform: translateY(0);

    }
    100% {
        transform: translateY(0);

    }
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  svg {
    fill: #fff;
    width: 30px;
    height: 30px;
    rotate: 180deg;
    animation-name: ${arrowAnim};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }
`;
