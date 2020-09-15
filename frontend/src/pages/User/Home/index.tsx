import React from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import EmailIcon from '../../../assets/images/icons/email_icon.svg';

import './style.css';

function Home(){
  return(
    <>
      <Header backgroundColor="#9871F5"/>
      
      <Background title="home">
        <div id="icon-test">
          <img id="icon-email-test"src={EmailIcon} alt="email"/>
          <input type="text" id="text-icon-test"/>
        </div>
        <form id="form-tes"></form>

      </Background>
    </>
  )
}

export default Home;