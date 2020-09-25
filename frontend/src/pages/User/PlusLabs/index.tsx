import React from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ComputerIcon from '../../../assets/images/icons/labs_icon.svg';

import './style.css';

function PlusLabs(){
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
          <input type="text" className="input-children"/>
        </div>
        <label htmlFor="email" className="label">Dia</label>
        <div id="input-login-email" className="input-login">
          <input type="text" className="input-children"/>
        </div>
        <label htmlFor="email" className="label">Tempo</label>
        <div id="input-login-email" className="input-login">
          <input type="text" className="input-children"/>
        </div>

        <div id="footer-botton-plus-lab">
          <button id="create-plus-lab">alocar laboratório</button>
        </div>
        
      </Background>
    </>
  )
}

export default PlusLabs;