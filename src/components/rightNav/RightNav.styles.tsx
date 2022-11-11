import styled from 'styled-components';
import sizes from 'resourses/sizes';
import colors from 'resourses/colors';
import flagBrasil from 'assets/icon/flagBrasil.svg';

export interface PropsRightNav {
  open?: boolean;
  mobile?: boolean;
}

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${sizes.px89};
  padding-right: ${sizes.px55};
`;

export const ContainerContent = styled.ul<PropsRightNav>`
  display: flex;
  align-items: center;
  flex-flow: ${props => (props.mobile ? 'column nowrap' : 'row nowrap')};
  position: ${props => (props.mobile ? 'fixed' : 'static')};
  background-color: ${props =>
    props.mobile ? colors.black50per : 'transparent'};
  transform: ${props =>
    props.mobile
      ? props.open
        ? 'translateX(0)'
        : 'translateX(100%)'
      : 'none'};
  top: ${props => (props.mobile ? '0' : 'auto')};
  right: ${props => (props.mobile ? '0' : 'auto')};
  width: ${props => (props.mobile ? '250px' : 'auto')};
  height: auto;
  padding-top: ${props => (props.mobile ? '3.5rem' : 'auto')};
  transition: ${props =>
    props.mobile ? 'transform 0.3s ease-in-out' : 'none'};
`;

export const Texto = styled.div`
  color: ${colors.white};
`;

export const Menu = styled.div<PropsRightNav>`
  display: ${props => (props.mobile ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 10px;
  background-color: ${colors.tropicalRainForest};
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  padding: ${sizes.px8};
  margin: ${sizes.px5} ${sizes.px21};
  color: ${colors.white};
  cursor: pointer;

  :hover {
    color: ${colors.red};
  }
`;
export const Flag = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const FlagBrasil = styled.img`
  width: ${sizes.px55};
  margin: ${sizes.px2};
`;
FlagBrasil.defaultProps = {
  src: flagBrasil,
  alt: 'Bandeira do Brasil',
};
