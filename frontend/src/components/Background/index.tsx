import React from 'react';

import { BackgroundMain, BodyMain, FooterText} from './style';

interface BackgroundProps{
  title: string;
  width: string;
  position: string;
}

const Background: React.FC<BackgroundProps> = (props) => {
  return(
    <BackgroundMain >
      <BodyMain style={{width: `${props.width}` ,justifySelf: `${props.position}`}}>
        {props.children}
      </BodyMain>
      
      <FooterText>Fundação Matias Machline</FooterText>
    </BackgroundMain>
)
}


export default Background;