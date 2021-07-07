import React from "react";
import {Switch, Route} from 'react-router-dom';

import Course from "../components/Course/Course";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Archive from "../components/Course/Archive";


const Toplearn = props => {
    return (
        <MainLayout >
            <Switch>
                <Route path="/login"  component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/archive" component={Archive}/>
                <Route path="/" exact component={Course}/>
            </Switch>
        </MainLayout>
    );
};

export default Toplearn;
