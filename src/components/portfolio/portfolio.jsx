import {
  DatePortfolio,
  ImgSkills,
  ItemPortfolio,
  ItemSkillsCurrent,
  LinkPortfolio,
  ListPortfolio,
  ListSkillsCurrent,
  PortfolioInner,
  SectionTitle,
  SkillsMiniImg,
  TitlePortfolio,
  WrapperImg,
} from './portfolio.styled';

import { dataPortfolio } from './dataPortfolio';

export const Portfolio = ({ t }) => {
  return (
    <PortfolioInner>
      <SectionTitle>{t('portfolio-title')}</SectionTitle>
      <ListPortfolio>
        {dataPortfolio.map(item => (
          <ItemPortfolio key={item.id}>
            <LinkPortfolio href={item.link} target={'_blank'}>
              <WrapperImg>
                <ImgSkills
                  src={item.url}
                  alt={`WebSite ${item.title}`}
                  loading={'lazy'}
                />
              </WrapperImg>
              <TitlePortfolio>{item.title}</TitlePortfolio>
              <DatePortfolio>{item.date}</DatePortfolio>
              <ListSkillsCurrent>
                {item.skills.map(skill => (
                  <ItemSkillsCurrent key={skill.id}>
                    <SkillsMiniImg
                      src={skill.url}
                      alt={skill.title}
                      loading={'lazy'}
                    />{' '}
                    {skill.title} |
                  </ItemSkillsCurrent>
                ))}
              </ListSkillsCurrent>
            </LinkPortfolio>
          </ItemPortfolio>
        ))}
      </ListPortfolio>
    </PortfolioInner>
  );
};
