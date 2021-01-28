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

`;