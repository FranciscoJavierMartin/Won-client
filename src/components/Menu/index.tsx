import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill';
import {
  ShoppingCart,
  Search as SearchIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import Logo from '../Logo';
import * as S from './styles';
import Button from '../Button';

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
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>

        <S.RegisterBox>
          <Button fullWidth size="large">
            Sign In
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sign Up">
            Sign Up
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
