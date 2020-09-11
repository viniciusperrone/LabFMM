import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import './style.css';

function RegisterUser(){
  return(
      <>
      
        <Header backgroundColor="none"/>

        <Background title="register-user">
          <form id="form-user-one">
            <label htmlFor="name" className="label">Nome</label>
            <input type="text" className="register-user"/>
            <label htmlFor="email" className="label">Email</label>
            <input type="text" className="register-user"/>
            <label htmlFor="displine" className="label">Disciplina</label>
            <input type="text" className="register-user"/>
          </form>

          <form id="form-user-second">
            <label id="lbl-first"htmlFor="" className="label">Senha</label>
            <input type="text" className="register-user"/>
            <label htmlFor="" className="label">Confirmar Senha</label>
            <input type="text" className="register-user"/>
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