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

export const FirstForm = styled.form`
  grid-row: 1/8;
  grid-column: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;


`;

export const SecondForm = styled.form`
  grid-row: 1/8;
  grid-column: 2;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  width: 300px;
  font: 400 2.25rem Skranji;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InputRegister = styled.div`
  background-color: var(--color-primary-input);

  width: 25vw;
  height: 5vh;

  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover{
    animation: ${animationInput} 1s;
  }

`;

export const Input = styled.input`
  width: 80%;
  height: 100%;

  margin-left: 2.5%;

  background-color: var(--color-primary-input);
`;

export const TextAdm = styled.p`
  text-decoration: none;
  font: 400 1.6rem Skranji;

  margin-top: 20px;
  margin-left: -100px;

  color: var(--color-background-internal-text);

`;

export const Button = styled.button`
  height: 45px;
  width: 200px;

  border-radius: 15px;
  margin-top: 60px;
  background-color: var(--color-secundary-button);

  &:hover{
    animation: ${animationButton} 400ms;
  }

`;