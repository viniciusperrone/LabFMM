import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/User/Login';
import Password from './pages/User/Password';

import RegisterUser from './pages/User/Register';
import HomeUser from './pages/User/Home';
import AgenderLabs from './pages/User/AgenderLabs';
import ViewLabs from './pages/User/ViewLabs';

import RegisterAdm from './pages/Adm/Register';
import HomeAdm from './pages/Adm/Home';

function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/register-user" component={RegisterUser}/>
            <Route path="/register-adm" component={RegisterAdm} />
            <Route path="/password" component={Password}/>
            <Route path="/home-user" component={HomeUser}/>
            <Route path="/agender-user" component={AgenderLabs}/>
            <Route path="/view-user" component={ViewLabs}/>
            <Route path="/home-adm" component={HomeAdm}/>
        </BrowserRouter>

    )
}

export default Routers;