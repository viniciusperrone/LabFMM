import styled, { keyframes }  from 'styled-components';

export const ConteinerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 27vh;
  width: 19vw;

  grid-row: 1/6; 
  grid-column: 1;

  img{
    height: 100%;
    width: 100%;
  }

`;
export const ConteinerFooter = styled.div`
  grid-row: 7/8;
  grid-column: 1;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  img{
    height: 31px;
    width: 37px;
  }
  p{
    font: 400 3rem Reem Kufi;
    margin-right: 10px;
  }
  input{
    border: none;
    color: var(--color-background-primary-text);
    font: 400 2rem Skranji;
  }

  a {
    text-decoration: none;
  }

  button{
    border: none;
    color: var(--color-primary-button-text);
  }

`;

export const FormSignIn = styled.form`
  grid-row: 1/8;  
  grid-column: 2;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  div{
    background-color: var(--color-primary-input);

    width: 25vw;
    height: 5vh;

    border-radius: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div > input{
    width: 80%;
    height: 100%;

    margin-left: 2.5%;

    background-color: var(--color-primary-input);
  }

  label {
    width: 300px;
    font: 400 2.25rem Skranji;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input{
    border: none;
    color: var(--color-background-primary-text);
    font: 400 2rem Skranji;
  }

  a {
    text-decoration: none;
  }

  button{
    border: none;
    color: var(--color-primary-button-text);
  }

`;

export const ImgEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 30px;
    height: 30px;

    margin-left: 5%;
  }

`;
export const ImgPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 26px;
    height: 26px;

    margin-left: 5%;
  }
  
`;

export const ButtonIn = styled.button`
  height: 6vh;
  width: 16vw;

  margin-top: 40%;
  background-color: var(--color-primary-button);
  border-radius: 15px;
  
  justify-content: center;
  text-align: center;
  font: 400 2.25rem Skranji;

  a {
    color: var(--color-primary-button-text);
  }

`;

export const LinkRegister = styled.p`
  width: 200px;
  text-decoration: none;
  margin-top: 10%;
  font: 400 1.6rem Skranji;

  color: var(--color-background-internal-text);
`;