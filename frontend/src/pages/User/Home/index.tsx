import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ComputerIcon from '../../../assets/images/icons/icon_computer.svg';
import PlusIcon from '../../../assets/images/icons/icon_plus.svg';
import ScheduleIcon from '../../../assets/images/icons/icon_schedule.svg';
import SearchIcon from '../../../assets/images/icons/icon_search.svg';
import LogoutIcon from '../../../assets/images/icons/icon_logout.svg';



import './style.css';

const Home: React.FC = () => {
  
  return(
    <>
      <Header backgroundColor="#9871F5"/>
      
      <Background title="home" width="45vw" position="center">
        <div id="home-image-computer">
          <img id="icon-computer-home-user"src={ComputerIcon} alt="computer"/>

          <div id="conteiner-button-home-use">
            <Link to="/plus-user">
              <div id="btn-home-user-alocar" className="btns-home-user">
                <img id="icon-home-user-plus"src={PlusIcon} alt="alocar"/>
                <p className="text-botton-home-user">alocar laboratório</p>
              </div>
           </Link>

          <Link to="/view-user">
              <div id="btn-home-user-views" className="btns-home-user">
                <img id="icon-home-user-search"src={SearchIcon} alt="visualizar"/>
                <p className="text-botton-home-user">visualizar laboratório</p>
              </div>
          </Link>

           <Link to="/agender-user">
              <div id="btn-home-user-agendar" className="btns-home-user">
                <img id="icon-home-user-schedule"src={ScheduleIcon} alt="agendar"/>
                <p className="text-botton-home-user">agendar laboratório</p>
              </div>
          </Link>

           <Link to="/">
              <div id="btn-home-user-sair" className="btns-home-user">
                <img id="icon-home-user-logout"src={LogoutIcon} alt="sair"/>
                <p className="text-botton-home-user">sair</p>
              </div>
           </Link>
          </div>
          
        </div>

      </Background>
    </>
  )
}


export default Home;