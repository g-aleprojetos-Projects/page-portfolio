import React, {useState} from 'react';
import {Hamburger} from 'components/hamburger';
import {RightNav} from 'components/rightNav';
import * as S from './Nav.styles';
import {useResponsiveContext} from 'context/mobileWindow';

export const Nav = () => {
  const {mobile} = useResponsiveContext();
  const [menuLateral, setMenuLateral] = useState<boolean>(false);

  const handleMudarMenu = () => {
    setMenuLateral(!menuLateral);
  };

  return (
    <S.Container data-testid={'test_nav'} mobile={mobile}>
      <S.Logo data-testid={'test_logo'} mobile={mobile}>
        Logo
      </S.Logo>
      <Hamburger openMenu={menuLateral} mudarEstado={handleMudarMenu} />
      <RightNav open={menuLateral} />
    </S.Container>
  );
};
