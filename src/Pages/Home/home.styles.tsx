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

export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: auto;
  padding: 1rem;
`;

export const Imagem = styled.img`
  width: 85%;
  height: auto;
  src: ${manutencao};
`;

Imagem.defaultProps = {
  src: manutencao,
  alt: 'Imagem de site em manutenção',
};
