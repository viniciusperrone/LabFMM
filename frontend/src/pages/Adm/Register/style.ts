import styled, { keyframes } from 'styled-components';

const inputAnimation = keyframes`
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

const buttonAnimation = keyframes`
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

export const InputConteiner = styled.div`
  background-color: var(--color-primary-input);

  width: 25vw;
  height: 5vh;

  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover{
    animation: ${inputAnimation} 1s;
  }

`;

export const InputInside = styled.input`
  width: 80%;
  height: 100%;

  margin-left: 2.5%;

  background-color: var(--color-primary-input);
`;

export const SecondForm = styled.form`
  grid-row: 1/8; 
  grid-column: 2;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  height: 45px;
  width: 200px;

  border-radius: 15px;
  margin-top: 60px;

  &:hover{
    animation: ${buttonAnimation} 400ms;
  }
`;