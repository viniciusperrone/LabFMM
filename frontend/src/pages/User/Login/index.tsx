import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import LogoTeacher from '../../../assets/images/icons/icon_teacher.svg';
import LogoHeart from '../../../assets/images/icons/purple-heart.svg';

import './style.css';

function Login(){
  return(
    <>
      <Header backgroundColor="none"/>

      <Background title="login">
        <img id="logo-teacher" src={LogoTeacher} alt="Teacher"/>
        <div id="visual-teacher">
          <p id="teacher-text">Olá mestre!</p>
          <img id="logo-heart" src={LogoHeart} alt="Heart"/>
        </div>

        <form id="form-user">
            <label htmlFor="email" className="label">Email</label>
            <input type="text" className="info-user"/>  
            <label htmlFor="password" className="label">Senha</label>
            <input type="password" className="info-user"/>

            <Link to="/home-user">
              <button id="text-go">entrar</button>
            </Link>

            <Link to="/register-user">
              <p id="link-register">cadastre-se!</p>
            </Link>
        </form>
      </Background>
    </>
  )
}

export default Login;