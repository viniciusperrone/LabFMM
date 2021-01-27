import React, { useState } from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ComputerIcon from '../../../assets/images/icons/labs_icon.svg';

import './style.css';

const PlusLabs: React.FC = () =>{

  const [laboratory, setLaboratory] = useState('');
  const [day, setDay] = useState('');
  const [classTime, setClassTime] = useState('');

  return(
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="plus-user" width="none" position="none">
        <header id="header-plus-user">
          <img id="img-header-plus-user" src={ComputerIcon} alt="computador"/>
          <p id="text-header-plus-user">Alocar Laboratório</p>
        </header>

        <label htmlFor="email" className="label">Laboratório</label>
        <div id="input-login-email" className="input-login">
          <input value={laboratory} type="text" className="input-children" onChange={e => setLaboratory(e.target.value)}/>
        </div>

        <label htmlFor="email" className="label">Dia</label>
        <div id="input-login-email" className="input-login">
          <input value={day} type="text" className="input-children" onChange={e => setDay(e.target.value)}/>
        </div>

        <label htmlFor="email" className="label">Tempo</label>
        <div id="input-login-email" className="input-login">
          <input value={classTime} type="text" className="input-children" onChange={e => setClassTime(e.target.value)}/>
        </div>

        <div id="footer-botton-plus-lab">
          <button id="create-plus-lab">alocar laboratório</button>
        </div>
        
      </Background>
    </>
  )
}

export default PlusLabs;