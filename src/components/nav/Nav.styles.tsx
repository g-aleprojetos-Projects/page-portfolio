import sizes from 'resourses/sizes';
import styled from 'styled-components';
import colors from '../../resourses/colors';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${sizes.media_768}) {
    justify-content: center;
  }
`;

export const ContainerLogo = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes.px89};
  color: ${colors.white};
  padding: ${`0 ${sizes.px8} 0 ${sizes.px89}`};

  @media screen and (max-width: ${sizes.media_768}) {
    position: fixed;
    padding: 0px;
  }
`;
