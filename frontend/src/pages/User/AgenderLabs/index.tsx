import React from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import SheduleIcon from '../../../assets/images/icons/icon_schedule.svg';

import { HeaderLabs, ConteinerMain} from './style';


const AgenderLabs: React.FC = () => { 
  return( 
    <>
      <Header backgroundColor="#9871F5" height="145px" zIndex= "14"/>
      <Background title="login" width="none" position="none">
        <HeaderLabs>
          <img src={SheduleIcon}/>
          <p>Agendar laboratórios</p>
        </HeaderLabs>
        <ConteinerMain>

        </ConteinerMain>
      </Background>
    </>
  )
}

export default AgenderLabs;