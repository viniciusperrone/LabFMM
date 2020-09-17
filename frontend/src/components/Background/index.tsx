import React from 'react';

import './style.css';

interface BackgroundProps{
  title: string;
  width: string;
  position: string;
}

const Background: React.FC<BackgroundProps> = (props) => {
  return(
    <div id="background" >
      <div id="body-main" style={{width: `${props.width}` ,justifySelf: `${props.position}`}}>{props.children}</div>
      
      <p id="footer-text">Fundação Matias Machline</p>
    </div>
)
}


export default Background;