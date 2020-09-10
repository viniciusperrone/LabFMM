import React, {Component} from 'react';

import LogoFMM from '../../assets/images/icons/FMM.svg';

import './style.css';

interface BackgroundProps{
  title: string;
}

const Background: React.FC<BackgroundProps> = (props) => {
  return(
    <div id="background">
      <div id="header-main">
        <img id="logo-fmm"src={LogoFMM} alt="FMM"/>
        <p className="header-text" id="header-first-text">Lab</p>
        <p className="header-text" id="header-second-text">FMM</p>
      </div>
      <div id="body-main">{props.children}</div>
      <p id="footer-text">Fundação Matias Machline</p>
    </div>
)
}


export default Background;