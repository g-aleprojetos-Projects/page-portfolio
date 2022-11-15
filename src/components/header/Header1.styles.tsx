import styled from 'styled-components';
import myVideo from 'assets/video/video.mp4';
import colors from '../../resourses/colors';
import sizes from 'resourses/sizes';

export interface PropsHeader {
  mobile: boolean;
}

export const Container = styled.div<PropsHeader>`
  display: flex;
  width: 100%;
  height: ${sizes.px144};
  background-color: ${props =>
    props.mobile ? 'transparent' : colors.lightgray};
`;

export const Overlay = styled.div<PropsHeader>`
  display: ${props => (props.mobile ? 'none' : 'flex')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.px144};
  background-color: ${colors.black50per};
`;

export const Video = styled.video<PropsHeader>`
  display: ${props => (props.mobile ? 'none' : 'flex')};
  width: 100vw;
  height: 100%;
  object-fit: cover;
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
