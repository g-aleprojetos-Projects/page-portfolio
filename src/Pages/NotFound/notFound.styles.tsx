import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import sizes from 'resourses/sizes';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Imagem = styled(SVG)`
  width: ${sizes.px610};
  height: ${sizes.px610};
`;
