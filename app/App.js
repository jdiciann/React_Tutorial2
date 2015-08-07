var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');


Router.run(routes, function(Root){
    BaasBox.setEndPoint("http://localhost:9000");
    BaasBox.appcode=("1234567890");
    //at the moment we log in as admin  
    React.render(<Root />, document.getElementById('app'));
         
});