import React, { useState } from 'react';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';

import EmailIcon from '../../../assets/images/icons/email_icon.svg';
import UserIcon from '../../../assets/images/icons/icon_user.svg';
import PasswordIcon from '../../../assets/images/icons/icon_password.svg';

import { Password, PasswordInput, Label, ConteinerButton, Button } from './styled';

import { messages } from '../../../utils/messages';

const AlterarSenha: React.FC = () => {

  const [show, setShow] = useState(false);

  function closedModalHandler (){
    return setShow(false);
  }

  return(
    <>
      <div>
        { show ? <div style={{
          background: `rgba(63,61,61,0.8)`,
          height: `100%`,
          width: `100%`,
          position: `absolute`,
          zIndex: 15,
          transition: `all 1.3s`,
        }}></div> : null}
      </div>
      <Header backgroundColor="none" height="none" zIndex="none"/>
      <Background title="password" width="none" position="none">

        <Modal message={messages.password} show={show} closedModalHandler={closedModalHandler} />
        <Label style={{ gridRow: `2`, gridColumn: `1` }} id="label-password-one">Nome</Label>

        <Password style={{ gridRow: `3`, gridColumn: `1`}}>
          <img style={{ width: `30px`, height: `30px`, marginLeft: `5%`}} src={UserIcon} alt="usuário"/>
          <PasswordInput type="text" />
        </Password>

        <Label style={{ gridRow: `4`, gridColumn: `1` }}>Email</Label>

        <Password style={{ gridRow: `5`, gridColumn: `1`}}>
          <img style={{ width: `30px`, height: `30px`, marginLeft: `5%`}} src={EmailIcon} alt="email"/>
          <PasswordInput type="text" />
        </Password>

        <Label style={{ gridRow: `2`, gridColumn: `2` }}>Nova Senha</Label>

        <Password style={{ gridRow: `3`, gridColumn: `2`}}>
          <img style={{ width: `26px`, height: `26px`, marginLeft: `5%`}} src={PasswordIcon} alt=""/>
          <PasswordInput type="password" />
        </Password>

        <Label style={{ gridRow: `4`, gridColumn: `2` }}>Confirmar Senha</Label>

        <Password style={{ gridRow: `5`, gridColumn: `2`}}>
          <img style={{ width: `26px`, height: `26px`, marginLeft: `5%`}} src={PasswordIcon} alt=""/>
          <PasswordInput type="password" />
        </Password>

        <ConteinerButton id="conteiner-button-password">
          <Button onClick={() => setShow(true)}>alterar senha</Button>
        </ConteinerButton>         
      
      </Background>
      
    </>
  
  )
}

export default AlterarSenha;