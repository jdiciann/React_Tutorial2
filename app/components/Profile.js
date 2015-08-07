var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
    init: function(){
        //var childRef = this.ref.child(this.getParams().username);
        //this.bindAsArray(childRef, 'notes');
        helpers.getGithubInfo(this.getParams().username)
            .then(function(dataObj){
                this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
        });
      }.bind(this));
    },
componentWillMount: function() {
        /*this.ref = new Firebase('https://burning-heat-5750.firebaseio.com');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(this.ref, 'notes');*/
        var _this=this;
        BaasBox.loadCollection("notes")
            .done(function(res) {
                console.log("loadCollection res ", res);
                var resToUse=[];
                for (var i=0;i<res.length;i++){
                    resToUse.push(res[i].body);
                }
                _this.state.notes=resToUse;
                _this.setState();
            })
            .fail(function(error) {
                console.log("loadCollection error ", error);
        })

        console.log('hello');
        console.log(this.ref);
        this.init();
    },
    
  componentWillUnmount: function(){
    this.unbind('notes');
  },
    componentWillReceiveProps: function(){
        this.init();
    },
  render: function(){
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
        <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;