import styled from 'styled-components';
import manutencao from './../../assets/image/photo.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const ContainerContent = styled.img`
  width: 50%;
  height: 50%;
  src: ${manutencao};
`;

ContainerContent.defaultProps = {
  src: manutencao,
};
