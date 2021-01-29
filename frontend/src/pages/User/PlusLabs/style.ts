import styled, { keyframes } from 'styled-components';

const animationButton = keyframes`
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
export const HeaderPlus = styled.header`
  grid-area: header;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  border-radius: 15px 15px 0 0;
`;

export const TextHeader = styled.p`
  font: 400 3rem Revalia;

  margin-left: 5%;
  color: var(--color-background-secundary-text);

`;

export const Label = styled.label`
  width: 300px;
  font: 400 2.25rem Skranji;
  margin-top: 10px;
  margin-left: 10%;

`;

export const InputFather = styled.div`
  background-color: var(--color-primary-input);

  width: 25vw;
  height: 5vh;

  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const InputLabs = styled.input`
  width: 80%;
  height: 100%;

  margin-left: 2.5%;

  background-color: var(--color-primary-input);
`;

export const Button = styled.button`
  height: 6vh;
  width: 16vw;

  background-color: var(--color-primary-button);
  border-radius: 15px;
  
  justify-content: center;
  text-align: center;
  font: 400 2.25rem Skranji;

  &:hover{
    animation: ${animationButton} 400ms;
  }

`;