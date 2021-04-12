import React from 'react' ;
import {BrowserRouter, Route } from 'react-router-dom' ;

import Home from './Home'
import Overview from './Overview'
import Filter from './Filter'
import Navbar from './Navbar'
const Router = () => {
    return (
        <BrowserRouter>
        <Navbar style={{position:"fix"}}/>
        <Route exact path="/" component={Home}/>
        <Route path="/filter" component={Filter}/>
        <Route path="/Overview" component={Overview}/>
        </BrowserRouter>
    )
}

export default Router ;