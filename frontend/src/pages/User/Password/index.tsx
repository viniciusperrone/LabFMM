import React from 'react';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import './style.css';

function AlterarSenha(){

  return(
    <>
      <Header backgroundColor="none"/>

      <Background title="password">
        <form id="form-password-one">
          <label htmlFor="name" className="label">Nome</label>
          <input type="text" className="info-password-use"/>
          <label htmlFor="email" className="label">Email</label>
          <input type="text" className="info-password-use"/>
        </form>
        <form id="form-password-second">
          <label htmlFor="change password" className="label">Alterar Senha</label>
          <input type="password" className="info-password-use"/>
          <label htmlFor="new password" className="label">Confirmar Senha</label>
          <input type="password" className="info-password-use"/>
        </form>
        <div id="conteiner-down">
          <button id="botton-change-password">alterar senha</button>
        </div>          
      </Background>
      
    </>
  
  )
}

export default AlterarSenha;