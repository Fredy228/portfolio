import {
  ArrowDown,
  AvatarImg,
  AvatarWrapper,
  IntroWrapper,
  IsMe,
  LangBtn,
  NameText,
} from './intro.styled';
import avatar_img from 'img/avatar.webp';
import { Icon } from '../Icon/Icon';

export const Intro = ({ t, lang, changeLanguage }) => {
  return (
    <IntroWrapper>
      <LangBtn onClick={changeLanguage}>{lang}</LangBtn>
      <AvatarWrapper>
        <AvatarImg src={avatar_img} alt={'Avatar Oleksii Smahrovych'} />
        <NameText>{t('my-name')}</NameText>
        <IsMe>{t('is-me')}</IsMe>
      </AvatarWrapper>
      <ArrowDown>
        <Icon name={'icon-arrow-up'} />
      </ArrowDown>
    </IntroWrapper>
  );
};
