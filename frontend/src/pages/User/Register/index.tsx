import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import BookIcon from '../../../assets/images/icons/icon_book.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';
import UserIcon from '../../../assets/images/icons/icon_user.svg';

import './style.css';

function RegisterUser(){
  return(
      <>
      
        <Header backgroundColor="none"/>

        <Background title="register-user" width="none" position="none">
          <form id="form-user-one">
            <label htmlFor="name" className="label" id="label-first-register">Nome</label>
            <div className="input-register">
              <img id="icon-user-register" src={UserIcon} alt="usuário"/>
              <input type="text" className="input-children-register" id="input-register-name"/>
            </div>
            <label htmlFor="email" className="label">Email</label>
            <div className="input-register">
              <img id="icon-email-register" src={EmailIcon} alt="email"/>
              <input type="text" className="input-children-register" id="input-register-"/>
            </div>
            <label htmlFor="displine" className="label">Disciplina</label>
            <div className="input-register">
              <img id="icon-discipline-register" src={BookIcon} alt="disciplina"/>
              <input type="text" className="input-children-register" id="input-register-disci"/>
            </div>
          </form>

          <form id="form-user-second">
            <label htmlFor="" className="label" id="label-second-register">Senha</label>
            <div className="input-register">
              <img className="icon-password-register"src={PasswordIcon} alt="senha"/>
              <input type="text" className="input-children-register" id="input-register-password"/>
            </div>
            <label htmlFor="" className="label">Confirmar Senha</label>
            <div className="input-register">
              <img className="icon-password-register"src={PasswordIcon} alt="senha"/>
              <input type="text" className="input-children-register" id="input-register-confirm-password"/>
            </div>
            <Link to="">
            <button id="botton-create">criar conta</button>
            </Link>
      
            <Link to="/register-adm">
              <p id="adm-register">administrador?</p>
            </Link>
          </form>
        </Background>
      </>
        
  )
}
export default RegisterUser;