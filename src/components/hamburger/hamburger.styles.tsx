import styled from 'styled-components';
import colors from 'resourses/colors';
import sizes from 'resourses/sizes';

export interface Props {
  open?: boolean;
  mobile?: boolean;
}

export const Container = styled.button<Props>`
  display: ${props => (props.mobile ? 'flex' : 'none')};
  position: fixed;
  justify-content: ${props => (props.mobile ? 'space-around' : 'flex-start')};
  flex-flow: ${props => (props.mobile ? 'column nowrap' : 'row nowrap')};
  width: ${sizes.px34};
  height: ${sizes.px34};
  right: 0;
  margin-right: ${sizes.px13};
  margin-top: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 20;
`;

const Span = styled.span<Props>`
  width: ${sizes.px34};
  height: ${sizes.px3};
  background-color: ${colors.white};
  border-radius: ${sizes.px8};
  transform-origin: ${sizes.px1};
  transition: all 0.3s linear;
`;

export const SpanSuperior = styled(Span)`
  transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const SpanMeio = styled(Span)`
  opacity: ${props => (props.open ? 0 : 1)};
`;

export const SpanInferior = styled(Span)`
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
`;
