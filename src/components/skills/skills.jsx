import {
  ImgSkills,
  InnerSkills,
  ItemSkills,
  ListSkills,
  SectionTitle,
  TitleSkills,
  WrapperImg,
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
              <ImgSkills src={item.url} loading={'lazy'} alt={item.title} />
            </WrapperImg>
            <TitleSkills>{item.title}</TitleSkills>
          </ItemSkills>
        ))}
      </ListSkills>
    </InnerSkills>
  );
};
