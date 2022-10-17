import styled from 'styled-components';
import myVideo from 'assets/video/video.mp4';
import flagBrasil from 'assets/icon/flagBrasil.svg';
import colors from '../../resourses/colors';
import sizes from 'resourses/sizes';

export const Container = styled.div`
  width: 100vw;
  height: ${sizes.px144};
  background-color: ${colors.lightgray};
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.px144};
  background-color: ${colors.black50per};
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
Video.defaultProps = {
  src: myVideo,
};

export const Content = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  position: absolute;
  width: 100%;
  height: ${sizes.px34};
  top: ${sizes.px55};
`;

export const HeaderRight = styled.div`
  width: ${sizes.px34};
  height: ${sizes.px21};
  margin-left: ${sizes.px55};
`;

export const HeaderLeft = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: ${sizes.px21};
  grid-gap: ${sizes.px5};
  margin-right: ${sizes.px21};
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: ${sizes.px5};
  margin: ${sizes.px5};
  color: ${colors.white};

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
