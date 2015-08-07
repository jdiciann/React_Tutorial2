var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Login = require('../components/Login');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Search = require('../components/Search');

module.exports=(
        <Route name="app" path="/" handler={Main} >
            <Route name="search" path="search/:username" handler={Search} />
            <Route name="profile" path="profile/:username" handler={Profile} />
            <Route name="login" path="login" handler={Login} />
            <DefaultRoute handler={Home} />
        </Route>

    );

    /*<Route name="app" path="/" handler = {Main}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>*/