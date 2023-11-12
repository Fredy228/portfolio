import styled, { css } from 'styled-components';

export const InnerSkills = styled.div``;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin-top: 30px;
`;

export const ListSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 20px auto 0 auto;
  }
`;

export const ItemSkills = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 767px) {
    margin: 0;
    flex-basis: calc(100% / 3);
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    flex-basis: calc(100% / 6);
  }

  @media screen and (min-width: 1000px) {
    margin: 0;
    flex-basis: calc(100% / 8);
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImgSkills = styled.img`
  width: 100%;
`;

export const TitleSkills = styled.h3`
  font-size: 20px;
  margin-top: 15px;

  @media screen and (max-width: 1199px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const TitleLevel = styled.p`
  margin-top: 15px;
  font-size: 16px;
  width: 100%;
  text-align: left;
`;

export const LevelSkills = styled.span`
  height: 7px;
  border-radius: 5px;
  background-color: rgba(128, 128, 128, 0.8);
  width: 25%;
  margin: 0 5px;

  @media screen and (max-width: 767px) {
    margin: 0 2px;
  }
`;

export const WrapperLevel = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;

  ${({ level }) => css`
    ${LevelSkills}:nth-child(-n + ${level}) {
      background-color: #f24c4c;
    }
  `}
`;
