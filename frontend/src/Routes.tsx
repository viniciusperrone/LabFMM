import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/User/Login';
import Password from './pages/User/Password';

import RegisterUser from './pages/User/Register';
import HomeUser from './pages/User/Home';
import PlusLabs from './pages/User/PlusLabs';
import AgenderLabs from './pages/User/AgenderLabs';
import ViewLabs from './pages/User/ViewLabs';
import Test from './pages/Test';

import RegisterAdm from './pages/Adm/Register';
import HomeAdm from './pages/Adm/Home';
import TeacherList from './pages/Adm/TeachersList';
import LabsList from './pages/Adm/LabsList';


function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/register-user" component={RegisterUser}/>
            <Route path="/register-adm" component={RegisterAdm} />
            <Route path="/password" component={Password}/>
            <Route path="/home-user" component={HomeUser}/>
            <Route path="/plus-user" component={PlusLabs}/>
            <Route path="/agender-user" component={AgenderLabs}/>
            <Route path="/view-user" component={ViewLabs}/>
            <Route path="/home-adm" component={HomeAdm}/>
            <Route path="/adm-labs" component={LabsList}/>
            <Route path="/adm-teachers" component={TeacherList}/>

            <Route path="/test" component={Test}/>
            
        </BrowserRouter>

    )
}

export default Routers;