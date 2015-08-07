var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers');
var RouteHandler = require('react-router').RouteHandler;
var Login = React.createClass({
  mixins: [Router.State, Router.Navigation],
  getInitialState: function(){
    return {
    }
  },
    init: function(){
        //var childRef = this.ref.child(this.getParams().username);
        //this.bindAsArray(childRef, 'notes');
        
    },
componentWillMount: function(){ 
        var _this=this;
        this.init();
    },
    
  componentWillUnmount: function(){
  },
    componentWillReceiveProps: function(){
        this.init();
    },
    handleSubmit: function() {
        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        console.log(email);
        console.log(password);
        var _this = this;
        BaasBox.login(email, password)
        .done(function (user) {
            console.log("Logged in ", user);
            _this.transitionTo('search',{username: email});
        })
        .fail(function (err) {
          console.log("error ", err);
    });
    },
    
    handleSignUp: function() {
        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        console.log(email);
        console.log(password);
        var _this = this;
        BaasBox.signup(email, password)
        .done(function (user) {
            console.log("Logged in ", user);
            _this.transitionTo('search',{username: email});
        })
        .fail(function (err) {
          console.log("error ", err);
    });
    },
  render: function(){
    var username = this.getParams().username;
    return (
        
    <div className="row">
        <RouteHandler />
    	<div className="col-md-4 col-md-offset-4">
    		<div className="panel panel-default">
			  	<div className="panel-heading">
			    	<h3 className="panel-title">Login</h3>
			 	</div>
			  	<div className="panel-body">
			    	<form accept-charset="UTF-8" role="form">
                    <fieldset>
                        <div className="form-group">
			    		    <input className="form-control" placeholder="yourmail@example.com" ref="email" name="email" type="text" />
			    		</div>
			    		<div className="form-group">
			    			<input className="form-control" placeholder="Password" ref="password" name="password" type="password" />

			    		</div>
			    		<div className="checkbox">
			    	    	<label>
			    	    		<input name="remember" type="checkbox" value="Remember Me" /> Remember Me
			    	    	</label>
			    	    </div>
			    		<input className="btn btn-lg btn-success btn-block" type="button" value="Login" onClick={this.handleSubmit} />
			    	</fieldset>
			      	</form>
                      <hr/>
                    <center><h4>OR</h4></center>
                    <form action="" method="get">
    <input className="btn btn-lg btn-facebook btn-block" type="submit" value="Sign up" onClick={this.handleSignUp} />
</form>
                    
			    </div>
			</div>
		</div>
	</div>

    )
  }
});

module.exports = Login;