import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import {ErrorMessage, Formik, Form, Field} from 'formilk'

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import LogoTeacher from '../../../assets/images/icons/icon_teacher.svg';
import LogoHeart from '../../../assets/images/icons/purple-heart.svg';
import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';

import './style.css';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function AuthUser() {
    if(email==''&&password==''){
      alert('email and password are invalid ');
      
    }
  }

  return(
    <>
      <Header backgroundColor="none"/>

      <Background title="login" width="none" position="none">
        <img id="logo-teacher" src={LogoTeacher} alt="Teacher"/>
        <div id="visual-teacher">
          <p id="teacher-text">Olá mestre!</p>
          <img id="logo-heart" src={LogoHeart} alt="Heart"/>
        </div>

        <form id="form-user">
            <label htmlFor="email" className="label">Email</label>
            <div id="input-login-email" className="input-login">
              <img id="image-email-login"src={EmailIcon} alt="email"/>
              <input value={email} type="text" id="input-children-email" className="input-children" onChange={e => setEmail(e.target.value)}/>
            </div>
            <label htmlFor="password" className="label">Senha</label>
            <div id="input-login-password" className="input-login">
              <img id="image-email-password"src={PasswordIcon} alt="password"/>
              <input value={password} type="password" id="input-children-password" className="input-children" onChange={e => setPassword(e.target.value)}/>
            </div>
            

            <Link to="/" >
              <button id="text-go" onClick={() => AuthUser()}>entrar</button>
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