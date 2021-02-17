import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header'; 

import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';
import UserIcon from '../../../assets/images/icons/icon_user.svg';


import { FirstForm, SecondForm, InputConteiner, InputInside, Button} from './style';

const RegisterAdm: React.FC = () => {
  return(
    <>
      <Header backgroundColor="none" height="none" zIndex="none"></Header>
      <Background title="home-adm" width="none" position="none">

      <FirstForm>
            
            <label>Nome</label>
            
            <InputConteiner>
              <img src={UserIcon} alt="usuário" style={{width: 30, height: 30, marginLeft: `5%`}}/>
              <InputInside type="text"/>
            </InputConteiner>

            <label htmlFor="email" className="label">Email</label>
            
            <InputConteiner>
              <img src={EmailIcon} alt="email" style={{width: 30, height: 30, marginLeft: `5%`}}/>
              <InputInside type="text"/>
            </InputConteiner>

            <Link to="">
              <Button style={{ backgroundColor: `var(--color-primary-button)`}}>voltar</Button>
            </Link>

        </FirstForm>

          <SecondForm>

            <label>Senha</label>
            
            <InputConteiner>
              <img src={PasswordIcon} alt="senha" style={{width: 26, height: 26, marginLeft: `5%`}}/>
              <InputInside type="password"/>
            </InputConteiner>

            <label>Confirmar Senha</label>

            <InputConteiner>
              <img src={PasswordIcon} alt="senha" style={{width: 26, height: 26, marginLeft: `5%`}}/>
              <InputInside type="password"/>
            </InputConteiner>

            <Link to="">
              <Button style={{ backgroundColor: `var(--color-secundary-button)`}}>criar conta</Button>
            </Link>

          </SecondForm>

      </Background>
    </>

  )
}

export default RegisterAdm;