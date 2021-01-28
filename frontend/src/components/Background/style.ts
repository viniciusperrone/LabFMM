import styled from 'styled-components';

export const BackgroundMain = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 20% auto 10%;
  
  justify-content: center;

`;

export const BodyMain = styled.div`
  grid-row: 2;
  grid-column: 2;
  border-radius: 15px;
  background: var(--color-background-internal);

  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "header header"
    "header header"
    "nada nada"
    "nada nada"
    "nada nada"
    "nada nada"
    "footer footer"
    "footer footer"
  ;
  justify-content: center;

  margin: 0;
  padding: 0;

`;

export const FooterText = styled.p`
  grid-row: 3;
  grid-column: 2;
  align-self: center;
  text-align: center;
  font: 400 2.5rem Risque;
  color: var(--color-background-down-text); 

`;