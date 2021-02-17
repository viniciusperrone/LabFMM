import React from 'react';

import { ConteinerModal, HeaderModal, CloseModal, ContentModal, BodyModal, FooterModal } from './style';

const ModalSucess: React.FC = () => {
  return(
    <>
      <ConteinerModal>
        <HeaderModal>
          <p>Welcome To Our Site</p>
          <CloseModal>X</CloseModal>
        </HeaderModal>
        
        <ContentModal>
          <BodyModal>
            <h4>Modal</h4>
            <p>Olá meus amigos tudo bem com vocês ?</p>
          </BodyModal>
          <FooterModal>
            <button>Close</button>
          </FooterModal>
        </ContentModal>
      </ConteinerModal>
    </>
  )
}

export default ModalSucess;