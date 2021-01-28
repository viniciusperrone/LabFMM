import styled, { keyframes } from 'styled-components';

const moveAnimationsButton = keyframes`

  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }

`;
export const HomeAdm = styled.div`
  grid-row: 1/8;
  grid-column: 1/2;

  margin: 0;
  padding: 0;

  width: 45vw;
  
  display: flex;
  flex-direction: column;

`;

export const ConteinerInside = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.div`
  background-color: var(--color-tertiary-button);

  width: 15vw;
  height: 7vh;

  border-radius: 10px;

  margin-left: 4vw;
  margin-top: 45%;

  justify-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover{
    animation: ${moveAnimationsButton} 400ms;
  }

`;

export const TextBtns = styled.p`
  font: 400 1.75rem Skranji;
  color: var(--color-primary-button-text);

  margin-left:5%;
`;