import React, {useState} from 'react';
import {useResponsiveContext} from 'context/mobileWindow';
import * as S from './RightNav.styles';
import {ToggleSwitch} from 'components/toggleSwitch';

export const RightNav = (props: S.PropsRightNav) => {
  const {open} = props;
  const {mobile} = useResponsiveContext();
  const [on, setOn] = useState(false);
  const handleToggle = () => setOn(prev => !prev);

  return (
    <S.ContainerNav data-testid={'test_rightNav'}>
      <S.ContainerContent
        data-testid={'test_containerContent'}
        open={open}
        mobile={mobile}>
        <S.Menu data-testid={'test_menu'} mobile={mobile}>
          <S.Texto>Menu</S.Texto>
        </S.Menu>
        <S.Item>Home</S.Item>
        <S.Item>Skills</S.Item>
        <S.Item>Projetos</S.Item>
        <S.Item>Sobre</S.Item>
        <S.Item data-testid={'test_toggle'}>
          <ToggleSwitch isOn={on} handleOnclick={handleToggle} />
        </S.Item>
        <S.Flag>
          <S.FlagBrasil data-testid={'test_flag_Brasil'} />
        </S.Flag>
      </S.ContainerContent>
    </S.ContainerNav>
  );
};
