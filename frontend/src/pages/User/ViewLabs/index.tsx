import React, { useState } from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ViewIcon from '../../../assets/images/icons/icon_view.svg';

import { HeaderLabs, TextHeader, Button, Label, InputConteiner, Input} from './style';


const ViewLabs:  React.FC = () => {

  const [laboratory, setLaboratory] = useState('');
  return(
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="login" width="none" position="none">
        <HeaderLabs>
          <img src={ViewIcon} alt="view" style={{width: `100px`, height: `100px`}}/>
          <TextHeader>Visualizar Laboratórios</TextHeader>
        </HeaderLabs>

        <Label>Laboratório</Label>

        <InputConteiner>
          <Input value={laboratory} type="text" onChange={e => setLaboratory(e.target.value)}/>
        </InputConteiner>

        <Button>buscar</Button>


        
      </Background>
    </>
  )
}

export default ViewLabs;