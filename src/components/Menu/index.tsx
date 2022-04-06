import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill';
import {
  ShoppingCart,
  Search as SearchIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import Logo from '../Logo';
import * as S from './styles';

export type MenuProps = {
  username?: string;
};

const Menu: React.FC<MenuProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen((prevState) => !prevState)}>
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
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
