import sizes from 'resourses/sizes';
import styled from 'styled-components';
import colors from '../../resourses/colors';

export interface PropsNav {
  mobile?: boolean;
}

export const Container = styled.nav<PropsNav>`
  display: flex;
  justify-content: ${props => (props.mobile ? 'center' : 'space-between')};
  width: 100%;
`;

export const ContainerLogo = styled.div<PropsNav>`
  position: ${props => (props.mobile ? 'fixed' : 'static')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes.px89};
  color: ${colors.white};
  padding: ${props => (props.mobile ? '0' : `0 ${sizes.px8} 0 ${sizes.px89}`)};
`;