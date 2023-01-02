import styled from 'styled-components';
import myVideo from 'assets/video/video.mp4';
import colors from '../../resourses/colors';
import sizes from 'resourses/sizes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${sizes.px144};
  background-color: 'transparent';
`;

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.px144};
  background-color: ${colors.black50per};

  @media (max-width: ${sizes.media_768}) {
    display: none;
  }
`;

export const Video = styled.video`
  display: flex;
  width: 100vw;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${sizes.media_768}) {
    display: none;
  }
`;

Video.defaultProps = {
  src: myVideo,
};

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: ${sizes.px34};
  top: ${sizes.px55};
`;
