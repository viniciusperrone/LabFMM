import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../../components/Header';
import Background from '../../../components/Background';

import ComputerIcon from '../../../assets/images/icons/icon_computer.svg';
import PlusIcon from '../../../assets/images/icons/icon_plus.svg';
import ScheduleIcon from '../../../assets/images/icons/icon_schedule.svg';
import SearchIcon from '../../../assets/images/icons/icon_search.svg';
import LogoutIcon from '../../../assets/images/icons/icon_logout.svg';



import { BodyConteiner, ButtonConteiner, Button, TextButton} from './style';

const Home: React.FC = () => {
  
  return(
    <>
      <Header backgroundColor="#9871F5"/>
      
      <Background title="home" width="45vw" position="center">

        <BodyConteiner>
          <img src={ComputerIcon} alt="computer" style={{width: `100px`, height: `100px`, alignSelf: `center`, gridColumn: `1/2`, gridRow: `3`}}/>

          <ButtonConteiner>

            <Link to="/plus-user">
              <Button style={{gridColumn: `1`, gridRow: `2`}}>
                <img src={PlusIcon} alt="alocar" style={{width: `30px`, height: `30px`, marginLeft: `5px`}}/>
                <TextButton>alocar laboratório</TextButton>
              </Button>
           </Link>

          <Link to="/view-user">
              <Button style={{gridColumn: `1`, gridRow: `4`}}>
                <img src={SearchIcon} alt="visualizar" style={{width: `28px`, height: `28px`, marginLeft: `5px`}}/>
                <TextButton>visualizar laboratório</TextButton>
              </Button>
          </Link>

           <Link to="/agender-user">
              <Button style={{gridColumn: `2`, gridRow: `2`}}>
                <img src={ScheduleIcon} alt="agendar" style={{width: `30px`, height: `30px`, marginLeft: `5px`}}/>
                <TextButton>agendar laboratório</TextButton>
              </Button>
          </Link>

           <Link to="/">
              <Button style={{gridColumn: `2`, gridRow: `4`}}>
                <img src={LogoutIcon} alt="sair" style={{width: `28px`, height: `28px`, marginLeft: `5px`}}/>
                <TextButton>sair</TextButton>
              </Button>
           </Link>

          </ButtonConteiner>
          
        </BodyConteiner>

      </Background>
    </>
  )
}


export default Home;