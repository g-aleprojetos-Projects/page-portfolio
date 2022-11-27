import React from 'react';
import {useResponsiveContext} from 'context/mobileWindow';
import {useBackgroundContext} from 'context/backgroud';
import {ToggleSwitch} from 'components/toggleSwitch';
import * as S from './RightNav.styles';
import {TextoSmall} from 'components/texto';

type Props = S.PropsRightNav & {
  mudarEstado: () => void;
};

export const RightNav = (props: Props) => {
  const {openRightNav, mudarEstado} = props;
  const {mobile} = useResponsiveContext();
  const {background, handleToggle} = useBackgroundContext();

  const handleNavegate = (item: string) => {
    console.log(item);
    mudarEstado();
  };

  return (
    <>
      {mobile && openRightNav && <S.Container onClick={mudarEstado} />}
      <S.ContainerNav data-testid={'test_rightNav'}>
        <S.ContainerContent
          data-testid={'test_containerContent'}
          openRightNav={openRightNav}
          mobile={mobile}
          backgroundDark={background}>
          <S.Menu data-testid={'test_menu'} mobile={mobile}>
            <S.Texto>
              <TextoSmall>Menu</TextoSmall>
            </S.Texto>
          </S.Menu>
          <S.ItemNav
            mobile={mobile}
            onClick={() => {
              handleNavegate('home');
            }}>
            <TextoSmall cursor="pointer">Home</TextoSmall>
          </S.ItemNav>
          <S.ItemNav
            mobile={mobile}
            onClick={() => {
              handleNavegate('skills');
            }}>
            <TextoSmall cursor="pointer">Skills</TextoSmall>
          </S.ItemNav>
          <S.ItemNav
            mobile={mobile}
            onClick={() => {
              handleNavegate('projetos');
            }}>
            <TextoSmall cursor="pointer">Projetos</TextoSmall>
          </S.ItemNav>
          <S.ItemNav
            mobile={mobile}
            onClick={() => {
              handleNavegate('sobre');
            }}>
            <TextoSmall cursor="pointer">Sobre</TextoSmall>
          </S.ItemNav>
          <S.Item data-testid={'test_toggle'}>
            <ToggleSwitch isOn={background} handleOnclick={handleToggle} />
          </S.Item>
          <S.Flag>
            <S.FlagBrasil data-testid={'test_flag_Brasil'} />
          </S.Flag>
        </S.ContainerContent>
      </S.ContainerNav>
    </>
  );
};
