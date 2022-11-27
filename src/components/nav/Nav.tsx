import React, {useState} from 'react';
import {Hamburger} from 'components/hamburger';
import {RightNav} from 'components/rightNav';
import * as S from './Nav.styles';
import {useResponsiveContext} from 'context/mobileWindow';
import {Logo} from 'components/logo';

export const Nav = () => {
  const {mobile} = useResponsiveContext();
  const [menuLateral, setMenuLateral] = useState<boolean>(false);

  const handleMudarMenu = () => {
    setMenuLateral(!menuLateral);
  };

  return (
    <S.Container data-testid={'test_nav'} mobile={mobile}>
      <S.ContainerLogo data-testid={'test_container_logo'} mobile={mobile}>
        <Logo testId="test_logo" />
      </S.ContainerLogo>
      <Hamburger openMenu={menuLateral} mudarEstado={handleMudarMenu} />
      <RightNav open={menuLateral} />
    </S.Container>
  );
};
