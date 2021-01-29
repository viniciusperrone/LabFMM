import styled, { keyframes }  from 'styled-components';

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
export const ConteinerFooter = styled.div`
  grid-row: 7/8;
  grid-column: 1;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const FormSignIn = styled.form`
  grid-row: 1/8;  
  grid-column: 2;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  input{
  border: none;
  color: var(--color-background-primary-text);
  font: 400 2rem Skranji;
  }

  a{
    text-decoration: none;
  }

  button{
    border: none;
    color: var(--color-primary-button-text);
  }
  button a{
  color: var(--color-primary-button-text);
}
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
    animation: ${animationInput} 1s;
  }
`;

export const Input = styled.input`
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
`;

export const Button = styled.button`
  height: 6vh;
  width: 16vw;

  margin-top: 40%;
  background-color: var(--color-primary-button);
  border-radius: 15px;
  
  justify-content: center;
  text-align: center;
  font: 400 2.25rem Skranji;

  &:hover{
    animation: ${animationButton} 400ms;
  }

`;

export const LinkSignUp = styled.p`
  width: 200px;
  text-decoration: none;
  margin-top: 10%;
  font: 400 1.6rem Skranji;

  color: var(--color-background-internal-text);
`;

