import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 60%;

    --color-background: #84B6A4;
    --color-background-primary-text: #F6F6F6;
    --color-background-secundary-text: #B8DE4A;
    --color-background-down-text: #FFFFFF;
    --color-background-internal: #FFFAFA;
    --color-background-internal-text: #000000;
    --color-primary-input: #A4F1AC;
    --color-primary-button: #EDE416;
    --color-primary-button-text: #FFFCFC;
    --color-secundary-button: #D54444;
    --color-tertiary-button: #DD6F6F;
    --color-background-header: #9871F5;
    --color-background-modal-header: #2c2c2c;
    --color-inside-modal-header: #e9e9e9;
  }

  *{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
  }

  html, body, #root{
   height: 100vh;
  }

  body{
    background: var(--color-background);
  }

  button{
   font: 400 2.25rem Skranji;
  }

  label{
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