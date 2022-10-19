import styled from 'styled-components';
import colors from 'resourses/colors';
import sizes from 'resourses/sizes';

export interface Props {
  open?: boolean;
}

export const Container = styled.div`
  display: none;
  position: fixed;
  width: ${sizes.px34};
  height: ${sizes.px34};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 20;

  @media (max-width: ${sizes.media_768}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
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
