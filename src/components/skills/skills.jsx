import {
  ImgSkills,
  InnerSkills,
  ItemSkills,
  LevelSkills,
  ListSkills,
  SectionTitle,
  TitleLevel,
  TitleSkills,
  WrapperImg,
  WrapperLevel,
} from './skills.styled';

import { dataSkills } from './dataSkills';

export const Skills = ({ t }) => {
  return (
    <InnerSkills>
      <SectionTitle>{t('skill-title')}</SectionTitle>
      <ListSkills>
        {dataSkills.map(item => (
          <ItemSkills key={item.id}>
            <WrapperImg>
              <ImgSkills src={item.url} />
            </WrapperImg>
            <TitleSkills>{item.title}</TitleSkills>
            <TitleLevel>{t('level')}</TitleLevel>
            <WrapperLevel level={item.level}>
              <LevelSkills level={item.level}></LevelSkills>
              <LevelSkills level={item.level}></LevelSkills>
              <LevelSkills level={item.level}></LevelSkills>
              <LevelSkills level={item.level}></LevelSkills>
              <LevelSkills level={item.level}></LevelSkills>
            </WrapperLevel>
          </ItemSkills>
        ))}
      </ListSkills>
    </InnerSkills>
  );
};
