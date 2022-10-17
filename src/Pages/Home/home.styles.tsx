import styled from 'styled-components';
import manutencao from 'assets/image/photo.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: auto;
  padding: 1rem;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  src: ${manutencao};
`;

Imagem.defaultProps = {
  src: manutencao,
  alt: 'Imagem de site em manutenção',
};
