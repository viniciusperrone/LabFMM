import React, { useState } from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ComputerIcon from '../../../assets/images/icons/labs_icon.svg';

import { HeaderPlus, TextHeader, Label, InputFather, InputLabs, Button } from './style';

const PlusLabs: React.FC = () =>{

  const [laboratory, setLaboratory] = useState('');
  const [day, setDay] = useState('');
  const [classTime, setClassTime] = useState('');

  return(
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="plus-user" width="none" position="none">
       
        <HeaderPlus>
          <img id="img-header-plus-user" style={{ width: `100px`, height: `100px`}} src={ComputerIcon} alt="computador"/>
          <TextHeader>Alocar Laboratório</TextHeader>
        </HeaderPlus>

        <Label htmlFor="email">Laboratório</Label>
        
        <InputFather>
          <InputLabs value={laboratory} type="text" onChange={e => setLaboratory(e.target.value)}/>
        </InputFather>

        <Label htmlFor="email">Dia</Label>
        
        <InputFather>
          <InputLabs value={day} type="text" onChange={e => setDay(e.target.value)}/>
        </InputFather>

        <Label htmlFor="email" >Tempo</Label>
        
        <InputFather>
          <InputLabs value={classTime} type="text" onChange={e => setClassTime(e.target.value)}/>
        </InputFather>

        <div style={{gridArea: `footer`,textAlign: `center`}}>
          <Button>alocar laboratório</Button>
        </div>
        
      </Background>
    </>
  )
}

export default PlusLabs;