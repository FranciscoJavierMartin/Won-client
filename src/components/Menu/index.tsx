import { Menu2 as MenuIcon } from '@styled-icons/remix-fill';
import {
  ShoppingCart,
  Search as SearchIcon,
} from '@styled-icons/material-outlined';
import Logo from '../Logo';
import * as S from './styles';

export type MenuProps = {
  username?: string;
};

const Menu: React.FC<MenuProps> = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCart aria-label="Open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
);

export default Menu;
