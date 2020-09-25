import React from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import SheduleIcon from '../../../assets/images/icons/icon_schedule.svg';

import './style.css';


function AgenderLabs(){ 
  return( 
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="login" width="none" position="none">
        <header id="header-user-agender-labs">
          <img src={SheduleIcon} alt="" id="img-user-agender-labs"/>
          <p id="text-header-agender-labs">Agendar laboratórios</p>
        </header>
      </Background>
    </>
  )
}

export default AgenderLabs;