import React from 'react';
import { Link } from 'react-router-dom';

import { Password } from './style';
const LinkPassword: React.FC = () => {
  return(
    <Password>
      <Link to="/password">esqueceu a senha?</Link>
    </Password>
  

  )
}

export default LinkPassword;