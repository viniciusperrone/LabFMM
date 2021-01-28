import styled from 'styled-components';

export const HeaderConteiner = styled.div``;

export const HeaderMain = styled.div`
  width: 100vw;
  height: 20vh;
  border-radius: 0 0 25px 25px;

  position: absolute;


  grid-column: 2;
  grid-row: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font: 400 3rem Revalia;
`;

export const ImageLogo = styled.div``;

export const FirstText = styled.p`
  color: var(--color-background-primary-text);
`;

export const SecondText = styled.p`
  color: var(--color-background-secundary-text);
`;
