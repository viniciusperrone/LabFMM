import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import ComputerIcon from '../../../assets/images/icons/icon_computer.svg';
import LabsIcon from '../../../assets/images/icons/labs_icon.svg';
import ProfIcon from '../../../assets/images/icons/icon__teacher.svg';

import './style.css';

const Home = () => {
  return( 
    <>
      <Header backgroundColor="#9871F5"/>
      <Background title="home-adm" width="45vw" position="center">
      <div id="home-image-computer-adm">
          <img id="icon-computer-home-user"src={ComputerIcon} alt="computer"/>

          <div id="conteiner-btns-home-adm">
            <Link to="/adm-labs">
              <div id="btn-home-adm-view-labs" className="btns-home-adm">
                <img id="image-labs-home-user" src={LabsIcon} alt="labs"/>
                <p className="text-btns-home-adm">laboratórios</p>
              </div>
            </Link>
            <Link to="/adm-teachers">
              <div id="btn-home-adm-view-teacher" className="btns-home-adm">
                <img id="image-teacher-home-user"src={ProfIcon} alt="teacher"/>
                <p className="text-btns-home-adm">professores</p>
              </div>
            </Link>
          </div>
        </div>
      </Background>
    </>
  )
}

export default Home;