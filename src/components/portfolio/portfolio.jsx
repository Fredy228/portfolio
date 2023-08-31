import { PortfolioInner, SectionTitle } from './portfolio.styled';

export const Portfolio = ({ t }) => {
  return (
    <PortfolioInner>
      <SectionTitle>{t('portfolio-title')}</SectionTitle>
    </PortfolioInner>
  );
};
