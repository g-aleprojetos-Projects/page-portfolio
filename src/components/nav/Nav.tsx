import React, {useState} from 'react';
import {Hamburger} from 'components/hamburger';
import {RightNav} from 'components/rightNav';
import * as S from './Nav.styles';
import {Logo} from 'components/logo';

export const Nav = () => {
  const [menuLateral, setMenuLateral] = useState<boolean>(false);

  const handleMudarMenu = () => {
    setMenuLateral(!menuLateral);
  };

  return (
    <S.Container data-testid={'test_nav'}>
      <S.ContainerLogo>
        <Logo />
      </S.ContainerLogo>
      <Hamburger openMenu={menuLateral} mudarEstado={handleMudarMenu} />
      <RightNav openRightNav={menuLateral} mudarEstado={handleMudarMenu} />
    </S.Container>
  );
};
