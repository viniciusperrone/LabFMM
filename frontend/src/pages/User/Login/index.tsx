import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {ErrorMessage, Formik, Form, Field} from 'formilk'

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import LinkPassword from '../../../components/LinkPassoword';

import LogoTeacher from '../../../assets/images/icons/icon_teacher.svg';
import LogoHeart from '../../../assets/images/icons/purple-heart.svg';
import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';

import { ConteinerFooter, FormSignIn, InputConteiner, Input, Label , Button, LinkSignUp } from './style';



const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [click, setClick] = useState(false);

  useEffect(() => {
    if(email == '' && password == '' && click == true){
      setClick(false);
    }

  }, [email, click, password])

  function AuthUser() {
    if(email != '' && password != ''){
      setClick(true);
      
    }
    return click;
  }

  return(
    <>
      <Header backgroundColor="none" height="none" zIndex="none"/>

      <Background title="login" width="none" position="none">
        <img 
          src={LogoTeacher} 
          alt="Teacher"
          style={{
            height: `27vh`,
            width: `19vw`,
            gridRow: `1/6`, 
            gridColumn: `1`,

            justifySelf: `center`,
            alignSelf: `center`
          }}
        />
        <ConteinerFooter>
          <p 
            style={{
              font: `400 3rem Reem Kufi`,
              marginRight: `10px`
            }}
          >
            Olá mestre!
          </p>
          <img 
            src={LogoHeart} 
            alt="Heart"
            style={{
              height: `31px`,
              width: `37px`
            }}
          />
        </ConteinerFooter>

        <FormSignIn>
            
            <Label>Email</Label>

            <InputConteiner>
              <img 
                src={EmailIcon}
                alt="email"
                style={{
                  width: `30px`,
                  height: `30px`,

                  marginLeft: `5%`
                }}  
              />
              <Input value={email} type="text" onChange={e => setEmail(e.target.value)}/>
            </InputConteiner>

            <Label>Senha</Label>

            <InputConteiner>
              <img 
                src={PasswordIcon} 
                alt="password"
                style={{
                  width: `26px`,
                  height: `26px`,

                  marginLeft: `5%`
                }}  
              />
              <Input value={password} type="password" onChange={e => setPassword(e.target.value)}/>
            </InputConteiner>
            

            <Link to="/" >
              <Button onClick={() => AuthUser()}>entrar</Button>
            </Link>

            <Link to="/register-user">
              <LinkSignUp>cadastre-se!</LinkSignUp>
            </Link>
            { click && <LinkPassword /> }
      
        </FormSignIn>
        
      </Background>
    </>
  )
}

export default Login;