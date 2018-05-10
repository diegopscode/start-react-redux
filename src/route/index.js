import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from "@/containers/Home"
import About from "@/containers/About"

import NotFound from "@/containers/NotFound"

const RouterContainer = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}/>

        <Route path='*' component={NotFound} />
    </Switch>
)

export default RouterContainer