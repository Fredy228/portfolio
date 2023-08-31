import { useTranslation } from 'react-i18next';
import { Intro } from './intro/intro';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { useState } from 'react';
import { Container } from './App.styled';

export const App = () => {
  const [lang, setLang] = useState('uk');

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    setLang(prevState => {
      const lg = prevState === 'en' ? 'uk' : 'en';
      i18n.changeLanguage(prevState);
      return lg;
    });
  };

  return (
    <>
      <Intro t={t} lang={lang} changeLanguage={changeLanguage} />
      <Container>
        <Skills t={t} />
      </Container>
      <Container>
        <Portfolio t={t} />
      </Container>
    </>
  );
};
