import styled from 'styled-components';
import colors from 'resourses/colors';

export interface Props {
  backgroundBlack: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    props.backgroundBlack ? colors.fundoEscuro : colors.lightgray};
`;
