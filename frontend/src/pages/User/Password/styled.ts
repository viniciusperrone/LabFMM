import styled, { keyframes } from 'styled-components';

const animationInput = keyframes`
  0%, 20%, 60%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
`;

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

export const Password = styled.div`
  background-color: var(--color-primary-input);

  width: 25vw;
  height: 5vh;

  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 10%;

  &:hover{
    animation: ${animationInput} 1s;
  }

`;

export const PasswordInput = styled.input`
  width: 80%;
  height: 100%;

  margin-left: 2.5%;

  background-color: var(--color-primary-input);
`;

export const Label = styled.label`
  width: 300px;
  font: 400 2.25rem Skranji;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15%;
`;

export const ConteinerButton = styled.div`
  grid-row: 6/8;
  grid-column: 1/2;
  width: 60vh;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const Button = styled.button`
  height: 45px;
  width: 200px;

  border-radius: 15px;
  background-color: var(--color-primary-button);

  &:hover{
    animation: ${animationButton} 400ms;
  }

  align-self: center;
  justify-self: center;
  margin-left: 100%;
`;