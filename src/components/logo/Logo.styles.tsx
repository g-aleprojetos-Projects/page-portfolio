import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import sizes from 'resourses/sizes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${sizes.px21};
`;

export const Iconelogo = styled(SVG)`
  width: ${sizes.px144};
  height: ${sizes.px144};
`;
