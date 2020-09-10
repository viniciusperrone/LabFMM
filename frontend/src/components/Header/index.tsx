import React, {Component} from 'react';

import LogoFMM from '../../assets/images/icons/FMM.svg';

import './style.css';

class Header extends Component{
  render(){
    return(
       <div id="background">
        <div id="header-main">
         <img id="logo-fmm"src={LogoFMM} alt="FMM"/>
         <p id="header-first-text">Lab</p>
         <p id="header-second-text">FMM</p>
        </div>
        <p id="footer-text">Fundação Matias Machline</p>
       </div>
       
    )
  }
}

export default Header;