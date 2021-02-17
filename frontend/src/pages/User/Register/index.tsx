import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import BookIcon from '../../../assets/images/icons/icon_book.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';
import UserIcon from '../../../assets/images/icons/icon_user.svg';

import { FirstForm, SecondForm, Label, InputRegister, Input, TextAdm, Button } from './style';

const RegisterUser: React.FC = () => {
  return(
      <>
      
        <Header backgroundColor="none" height="none" zIndex="none"/>

        <Background title="register-user" width="none" position="none">
          
          <FirstForm>
            
            <Label htmlFor="name" style={{ marginTop: `-10%`}}>Nome</Label>

            <InputRegister>
              <img src={UserIcon} alt="usuário" style={{ width: `30px`, height: `30px`, marginLeft: `5%`}}/>
              <Input type="text"/>
            </InputRegister>

            <Label htmlFor="email" >Email</Label>

            <InputRegister>
              <img src={EmailIcon} alt="email" style={{ width: `30px`, height: `30px`, marginLeft: `5%`}}/>
              <Input type="text"/>
            </InputRegister>

            <Label>Disciplina</Label>

            <InputRegister>
              <img src={BookIcon} alt="disciplina" style={{ width: `30px`, height: `30px`, marginLeft: `5%`}}/>
              <Input type="text"/>
            </InputRegister>

          </FirstForm>

          <SecondForm>

            <Label>Senha</Label>

            <InputRegister>
              <img src={PasswordIcon} alt="senha" style={{ width: `26px`, height: `26px`, marginLeft: `5%`}}/>
              <Input type="password"/>
            </InputRegister>

            <Label>Confirmar Senha</Label>

            <InputRegister>
              <img src={PasswordIcon} alt="senha" style={{ width: `26px`, height: `26px`, marginLeft: `5%`}}/>
              <Input type="password"/>
            </InputRegister>

            <Link to="">
              <Button>criar conta</Button>
            </Link>
      
            <Link to="/register-adm">
              <TextAdm>administrador?</TextAdm>
            </Link>

          </SecondForm>
        </Background>
      </>
        
  )
}
export default RegisterUser;