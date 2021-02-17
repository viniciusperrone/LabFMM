import styled from 'styled-components';

export const BodyConteiner = styled.div`
  grid-row: 1/8;
  grid-column: 1/2;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  border-radius: 15px;
  background: var(--color-background-internal);

  width: 45vw;
  
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const ButtonConteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
`;

export const Button = styled.div`
  background-color: var(--color-tertiary-button);

  width: 15vw;
  height: 7vh;

  border-radius: 10px;

  margin-left: 4vw;
  margin-top: 30px;

  justify-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const TextButton = styled.p`
  font: 400 1.5rem Skranji;
  color: var(--color-primary-button-text);

  margin-left:5%;
`;