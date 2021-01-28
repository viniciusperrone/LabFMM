import styled from 'styled-components';

export const HeaderLabs = styled.header`
  grid-area: header;


  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  img{
    width: 100px;
    height: 100px;
  }
  p{
    font: 400 3rem Revalia;

    margin-left: 5%;
    color: var(--color-background-secundary-text);
  }
`;

export const ConteinerMain = styled.div`
  grid-area: nada;
  background-color: lawngreen;
`;