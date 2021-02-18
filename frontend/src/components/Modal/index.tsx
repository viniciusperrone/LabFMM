import React from 'react';

import { ConteinerModal, HeaderModal, CloseModal, ContentModal, BodyModal, FooterModal } from './style';

interface ModalProps{
  message: string;
  show: boolean;
  closedModalHandler: Function;
}
const ModalSucess: React.FC<ModalProps> = (props) => {

  return(
    <>
      <div style={{ gridArea: `nada`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
        <ConteinerModal style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
          <HeaderModal>
            <p>Fundação Matias Machline</p>
            <CloseModal  onClick={() => props.closedModalHandler()}><b>X</b></CloseModal>
          </HeaderModal>
          
          <ContentModal>
            <BodyModal>
              <p>{ props.message }</p>
            </BodyModal>
            <FooterModal>
              <button onClick={() => props.closedModalHandler()}>Salvar</button>
            </FooterModal>
          </ContentModal>
        </ConteinerModal>
      </div>
    </>
  )
}

export default ModalSucess;