import React from 'react';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import ComputerIcon from '../../../assets/images/icons/labs_icon.svg';

import { HeaderMain } from './style';


const LabsList = () => {
  return(
    <>
      <Header backgroundColor="#9871F5"/>
      
      <Background title="home" width="none" position="none">
        <HeaderMain>
          <img src={ComputerIcon} alt="view" style={{width: `100px`, height: `100px`}}/>
          <p>Lista de laboratórios</p>
        </HeaderMain>
      </Background>
    </>
  )
}

export default LabsList;