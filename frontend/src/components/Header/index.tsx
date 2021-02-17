import React from 'react';

import LogoFMM from '../../assets/images/icons/FMM.svg';

import { HeaderConteiner, HeaderMain, ImageLogo, FirstText, SecondText} from './style';

interface HeaderProps {
  backgroundColor: string;
  height: string;
  zIndex: string;
}

const Header: React.FC<HeaderProps> = ( props ) => {
  return(
    <HeaderConteiner>
      <HeaderMain style={{ background: props.backgroundColor, height: props.height, zIndex: Number(props.zIndex) }}>
        <ImageLogo>
          <img src={LogoFMM} alt="FMM" style={{ width: 82, height: 80}}/>
        </ImageLogo>
        
        
        <FirstText>Lab</FirstText>

        <SecondText>FMM</SecondText>
      </HeaderMain>
    </HeaderConteiner>  
  )
}

export default Header;