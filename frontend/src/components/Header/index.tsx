import React from 'react';

import LogoFMM from '../../assets/images/icons/FMM.svg';

import { HeaderConteiner, HeaderMain, ImageLogo, FirstText, SecondText} from './style';

interface HeaderProps {
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  return(
    <HeaderConteiner>
      <HeaderMain style={{ background: backgroundColor }}>
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