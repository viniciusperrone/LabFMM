import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import './style.css';


function AgenderLabs(){ 
  return( 
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="login" width="none" position="none">
        <div id="conteiner-calendario-agender">
         <DayPicker />
        </div>
      </Background>
    </>
  )
}

export default AgenderLabs;