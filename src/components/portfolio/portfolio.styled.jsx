import styled from 'styled-components';

export const PortfolioInner = styled.div``;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin-top: 30px;
`;

export const ListPortfolio = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 20px auto 0 auto;
  }
`;

export const TitlePortfolio = styled.h3`
  font-size: 20px;
  margin-top: 5px;
  transition: text-decoration 350ms ease;
`;

export const ItemPortfolio = styled.li`
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  transition: box-shadow 350ms ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

    ${TitlePortfolio} {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 15px auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(40px / 2);
    flex-basis: calc(100% / 2 - 40px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(20px / 2);
    flex-basis: calc(100% / 3 - 20px);
  }
`;

export const LinkPortfolio = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

export const WrapperImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgSkills = styled.img`
  width: 100%;
`;

export const SkillsMiniImg = styled.img`
  width: 25px;
  margin: 0 5px;
`;

export const ListSkillsCurrent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const ItemSkillsCurrent = styled.li`
  display: flex;
  font-size: 18px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`;
