import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ModalSucess from '../../components/ModalSucess';

const Test: React.FC = () => {
  return(
    <>
      <Header backgroundColor="none" height="none" zIndex="none"/>
      <Background title="none" width="none" position="none">
        <ModalSucess />
      </Background>
    </>
  )
}

export default Test;