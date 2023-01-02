import React, {useState} from 'react';
import {useBackgroundContext} from 'context/backgroud';
import {ToggleSwitch} from 'components/toggleSwitch';
import * as S from './RightNav.styles';
import {TextoMedium, TextoSmall} from 'components/texto';
import {useNavigate} from 'react-router-dom';
import rotas from 'resourses/rotas';
import colors from 'resourses/colors';

type Props = S.PropsRightNav & {
  mudarEstado: () => void;
};

export const RightNav = (props: Props) => {
  const navigate = useNavigate();
  const {openRightNav, mudarEstado} = props;
  const {temaEscuro, handleToggle} = useBackgroundContext();
  const [telaAtiva, setTelaAtiva] = useState<string>(rotas.Home);

  const handleNavegate = (item: string) => {
    setTelaAtiva(item);
    navigate(item);
    mudarEstado();
  };

  const handleToggleSwich = () => {
    handleToggle();
    mudarEstado();
  };

  return (
    <>
      {openRightNav && (
        <S.Container
          data-testid={'test_rightNav_container'}
          onClick={mudarEstado}
        />
      )}
      <S.ContainerNav data-testid={'test_rightNav'}>
        <S.ContainerContent
          data-testid={'test_containerContent'}
          openRightNav={openRightNav}>
          <S.Menu data-testid={'test_menu'}>
            <S.Texto>
              <TextoSmall>Menu</TextoSmall>
            </S.Texto>
          </S.Menu>
          <S.ItemNav
            isActive={telaAtiva === rotas.Home && true}
            onClick={() => {
              handleNavegate(rotas.Home);
            }}>
            {telaAtiva === rotas.Home ? (
              <TextoMedium peso="bold" cursor="default">
                Home
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer" cor={colors.lightgray}>
                Home
              </TextoSmall>
            )}
          </S.ItemNav>
          <S.ItemNav
            isActive={telaAtiva === rotas.Skills && true}
            onClick={() => {
              handleNavegate(rotas.Skills);
            }}>
            {telaAtiva === rotas.Skills ? (
              <TextoMedium peso="bold" cursor="default">
                Skills
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer" cor={colors.lightgray}>
                Skills
              </TextoSmall>
            )}
          </S.ItemNav>
          <S.ItemNav
            isActive={telaAtiva === rotas.Projetos && true}
            onClick={() => {
              handleNavegate(rotas.Projetos);
            }}>
            {telaAtiva === rotas.Projetos ? (
              <TextoMedium peso="bold" cursor="default">
                Projetos
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer" cor={colors.lightgray}>
                Projetos
              </TextoSmall>
            )}
          </S.ItemNav>
          <S.ItemNav
            isActive={telaAtiva === rotas.Sobre && true}
            onClick={() => {
              handleNavegate(rotas.Sobre);
            }}>
            {telaAtiva === rotas.Sobre ? (
              <TextoMedium peso="bold" cursor="default">
                Sobre
              </TextoMedium>
            ) : (
              <TextoSmall cursor="pointer" cor={colors.lightgray}>
                Sobre
              </TextoSmall>
            )}
          </S.ItemNav>
          <S.Item data-testid={'test_toggle'}>
            <ToggleSwitch isOn={temaEscuro} handleOnclick={handleToggleSwich} />
          </S.Item>
          <S.Flag>
            <S.FlagBrasil data-testid={'test_flag_Brasil'} />
          </S.Flag>
        </S.ContainerContent>
      </S.ContainerNav>
    </>
  );
};
