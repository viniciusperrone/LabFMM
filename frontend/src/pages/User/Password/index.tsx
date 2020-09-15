import React from 'react';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import UserIcon from '../../../assets/images/icons/icon_user.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';

import './style.css';

function AlterarSenha(){

  return(
    <>
      <Header backgroundColor="none"/>

      <Background title="password">

        <label htmlFor="usuário" className="label" id="label-password-one">Nome</label>
        <div className="input-password" id="input-password-one">
          <img id="icon-user-password"src={UserIcon} alt="usuário"/>
          <input type="text" className="input-children-password" id="input-password-user"/>
        </div>

        <label htmlFor="email" className="label" id="label-password-two">Email</label>
        <div className="input-password" id="input-password-two">
          <img id="icon-email-password"src={EmailIcon} alt="email"/>
          <input type="text" className="input-children-password" id="input-password-email"/>
        </div>

        <label htmlFor="nova senha" className="label" id="label-password-three">Nova Senha</label>
        <div className="input-password" id="input-password-three">
          <img className="icon-password-password" src={PasswordIcon} alt=""/>
          <input type="password" className="input-children-password" id="input-new-password-pass"/>
        </div>

        <label htmlFor="confirmar senha" className="label" id="label-password-four">Confirmar Senha</label>
        <div className="input-password" id="input-password-four">
          <img className="icon-password-password" src={PasswordIcon} alt=""/>
          <input type="password" className="input-children-password" id="input-confirm-password-password"/>
        </div>
        
        <button id="botton-change-password">alterar senha</button>         
      
      </Background>
      
    </>
  
  )
}

export default AlterarSenha;