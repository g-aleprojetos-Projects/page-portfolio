import React from 'react';
import * as S from './ToggleSwitch.styles';

type Props = S.PropsToggle & {
  handleOnclick: () => void;
};

export const ToggleSwitch = (props: Props) => {
  const {isOn, handleOnclick} = props;

  return (
    <S.ToggleSwitchWrapper data-testid={'test_togleSwitch'} isOn={isOn}>
      <S.Input type="checkbox" onClick={handleOnclick} />
      <S.Span />
      <S.SpanBack data-testid={'test_togleSwitch_icon'} isOn={isOn} />
    </S.ToggleSwitchWrapper>
  );
};
