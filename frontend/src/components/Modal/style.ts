import styled from 'styled-components';

export const ConteinerModal = styled.div`
  background: #fff;
  width: 500px;
  margin: 4rem auto;

  grid-area: nada;

  justify-self: center;
  align-self: center;

  border-radius: 15px;

  position: absolute;
  z-index: 20;

`;

export const HeaderModal = styled.div`
  background: var(--color-background-header);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 15px 15px 0 0;

  p{
    font: 400 3rem Reem Kufi;
    color: #fff;
    margin-left: 70px;
  }

`;

export const CloseModal = styled.span`
  font: 400 3rem Reem Kufi;
  color: #fff;
  cursor: pointer;

  &:hover{
    color: var(--color-secundary-button);
  }
`;

export const ContentModal = styled.div`
  margin-bottom: 1.5rem 1rem;

`;

export const BodyModal = styled.div`
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font: 400 2.25rem Skranji;
    color: #333;
    padding: 1rem;
    margin: 1rem 0 2rem 0;
  }


`;

export const FooterModal = styled.div`

  height: 80px;
  weight: 100%;
  display: flex;

  align-items: center;
  justify-content: center;

  button{
    border-radius: 15px;

    margin-left: -10px;

    height: 6vh;
    width: 14vw;

    background-color: var(--color-secundary-button);
  
    justify-content: center;
    text-align: center;
    font: 400 2.25rem Skranji;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;