import React from 'react';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ViewIcon from '../../../assets/images/icons/icon_view.svg';

import './style.css';

function ViewLabs(){
  return(
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="login" width="none" position="none">
        <header id="header-view-labs-user">
          <img src={ViewIcon} alt="view" id="img-view-labs-user"/>
          <p id="text-header-view-labs-user">Visualizar Laboratórios</p>
        </header>
        <label htmlFor="email" className="label">Laboratório</label>
        <div id="input-user-view-labs-search" className="input-login">
          <input type="text" className="input-children"/>
        </div>
        <button id="search-user-view-labs">buscar</button>


        
      </Background>
    </>
  )
}

export default ViewLabs;