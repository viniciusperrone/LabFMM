import React from 'react';
import {Link} from 'react-router-dom';

import Background from '../../../components/Background';
import Header from '../../../components/Header';

import ComputerIcon from '../../../assets/images/icons/icon_computer.svg';
import LabsIcon from '../../../assets/images/icons/labs_icon.svg';
import ProfIcon from '../../../assets/images/icons/icon__teacher.svg';

import { HomeAdm, ConteinerInside, Button, TextBtns} from './style';

const Home = () => {
  return( 
    <>
      <Header backgroundColor="#9871F5" height="145px" zIndex= "14"/>
      <Background title="home-adm" width="45vw" position="center">
      <HomeAdm style={{ zIndex: Number(`16`)}}>
          <img src={ComputerIcon} alt="computer" style={{width: `100px`, height: `100px`, alignSelf: `center`, gridColumn: `1/2`, gridRow: `3`}}/>

          <ConteinerInside>
            <Link to="/adm-labs">
              <Button>
                <img src={LabsIcon} alt="labs" style={{width: 30, height: 30, marginLeft: 5}}/>
                <TextBtns>laboratórios</TextBtns>
              </Button>
            </Link>

            <Link to="/adm-teachers">
              <Button>
                <img src={ProfIcon} alt="teacher" style={{width: 30, height: 30, marginLeft: 5}}/>
                <TextBtns>professores</TextBtns>
              </Button>
            </Link>
            
          </ConteinerInside>
        </HomeAdm>
      </Background>
    </>
  )
}

export default Home;