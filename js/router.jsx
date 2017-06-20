import React from "react";
import { Router,
    Route,
    IndexLink,
    Link,
    IndexRoute,
    hashHistory } from 'react-router';
import Template from './Template.jsx';
import Info from './Info.jsx';
import PickCity from './PickCity.jsx';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';

const appRoutes = <Router history={hashHistory}>
    <Route path='/' component={Template}>
        <IndexRoute component={Home} />
        <Route path='/weather' component={PickCity} />
        <Route path='/info' component={Info} />
        <Route path='*' component={NotFound} />
    </Route>
</Router>;
module.exports = appRoutes;