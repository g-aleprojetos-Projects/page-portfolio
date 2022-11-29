import React, {useState} from 'react';
import {useResponsiveContext} from 'context/mobileWindow';
import {useBackgroundContext} from 'context/backgroud';
import {ToggleSwitch} from 'components/toggleSwitch';
import * as S from './RightNav.styles';
import {TextoMedium, TextoSmall} from 'components/texto';
import {useNavigate} from 'react-router-dom';
import rotas from 'resourses/rotas';

type Props = S.PropsRightNav & {
  mudarEstado: () => void;
};

export const RightNav = (props: Props) => {
  const {openRightNav, mudarEstado} = props;
  const navigate = useNavigate();
  const {mobile} = useResponsiveContext();
  const {background, handleToggle} = useBackgroundContext();
  const [telaAtiva, setTelaAtiva] = useState<string>(rotas.Home);

  const handleNavegate = (item: string) => {
    setTelaAtiva(item);
    navigate(item);
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
            isActive={telaAtiva === rotas.Home && true}
            onClick={() => {
              handleNavegate(rotas.Home);
            }}>
            {telaAtiva === rotas.Home ? (
              <TextoMedium peso="bold" cursor="default">
                Home
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer"> Home</TextoSmall>
            )}
          </S.ItemNav>
          <S.ItemNav
            mobile={mobile}
            isActive={telaAtiva === rotas.Skills && true}
            onClick={() => {
              handleNavegate(rotas.Skills);
            }}>
            {telaAtiva === rotas.Skills ? (
              <TextoMedium peso="bold" cursor="default">
                Skills
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer"> Skills</TextoSmall>
            )}
          </S.ItemNav>
          <S.ItemNav
            mobile={mobile}
            isActive={telaAtiva === rotas.Projetos && true}
            onClick={() => {
              handleNavegate(rotas.Projetos);
            }}>
            {telaAtiva === rotas.Projetos ? (
              <TextoMedium peso="bold" cursor="default">
                Projetos
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer"> Projetos</TextoSmall>
            )}
          </S.ItemNav>
          <S.ItemNav
            mobile={mobile}
            isActive={telaAtiva === rotas.Sobre && true}
            onClick={() => {
              handleNavegate(rotas.Sobre);
            }}>
            {telaAtiva === rotas.Sobre ? (
              <TextoMedium peso="bold" cursor="default">
                Sobre
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer"> Sobre</TextoSmall>
            )}
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
