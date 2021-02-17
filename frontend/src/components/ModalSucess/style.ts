import styled from 'styled-components';

export const ConteinerModal = styled.div`
  background: #fff;
  width: 80%;
  max-width: 800px;
  margin: 4rem auto;

`;

export const HeaderModal = styled.div`
  background: var(--color-background-header);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font: 400 3rem Reem Kufi;
    color: #fff;
  }

`;

export const CloseModal = styled.span`
  font: 400 3rem Reem Kufi;
  color: #fff;
  cursor: pointer;
`;

export const ContentModal = styled.div`
  margin-bottom: 1.5rem 1rem;

`;

export const BodyModal = styled.div`
  font-size: 1.8rem;
  color: #dd501d;

  p{
    font: 400 1.5rem Skranji;
    background: #eee;
    color: #333;
    padding: 1rem;
    margin: 1rem 0 2rem 0;
  }


`;

export const FooterModal = styled.div`
  button{
    border-radius: 15px;

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