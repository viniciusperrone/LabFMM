import React from 'react';

import LogoFMM from '../../assets/images/icons/FMM.svg';

import './style.css';

interface HeaderProps {
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  return(
    <div id="header">
      <div id="header-main" style={{ background: backgroundColor }}>
        <img id="logo-fmm"src={LogoFMM} alt="FMM"/>
        
        <p id="header-first-text">Lab</p>

        <p id="header-second-text">FMM</p>
      </div>
    </div>  
  )
}

export default Header;