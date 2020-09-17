import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header'; 

import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';
import UserIcon from '../../../assets/images/icons/icon_user.svg';

import './style.css';

function RegisterAdm(){
  return(
    <>
      <Header backgroundColor="none"></Header>
      <Background title="home-adm" width="none" position="none">
      <form id="form-adm-one">
            <label htmlFor="name" className="label" id="label-first-register-adm">Nome</label>
            <div className="input-register-adm">
              <img id="icon-user-register-adm" src={UserIcon} alt="usuário"/>
              <input type="text" className="input-children-register-adm" id="input-register-adm-name"/>
            </div>
            <label htmlFor="email" className="label">Email</label>
            <div className="input-register-adm">
              <img id="icon-email-register-adm" src={EmailIcon} alt="email"/>
              <input type="text" className="input-children-register-adm" id="input-register-adm-email"/>
            </div>

            <Link to="">
              <button id="botton-back-register-adm">voltar</button>
            </Link>
          </form>

          <form id="form-adm-second">
            <label htmlFor="" className="label" id="label-second-register-adm">Senha</label>
            <div className="input-register-adm">
              <img className="icon-password-register-adm"src={PasswordIcon} alt="senha"/>
              <input type="password" className="input-children-register-adm" id="input-register-adm-password"/>
            </div>
            <label htmlFor="" className="label">Confirmar Senha</label>
            <div className="input-register-adm">
              <img className="icon-password-register-adm"src={PasswordIcon} alt="senha"/>
              <input type="password" className="input-children-register-adm" id="input-register-adm-confirm-password"/>
            </div>
            <Link to="">
            <button id="botton-create-adm">criar conta</button>
            </Link>
          </form>
      </Background>
    </>

  )
}

export default RegisterAdm;