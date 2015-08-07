var React = require('react');
var UserProfile = require('../Github/UserProfile');
var Router = require('react-router');

var AddNote = React.createClass({
    mixins: [Router.State, Router.Navigation],
    propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function(){
    var note1 = new Object();
    note1.title = this.getParams().username;
    note1.body = this.refs.note.getDOMNode().value;  
    var _this=this;
    BaasBox.save(note1, "notes")
        .done(function(res) {
            console.log("handleSubmit res: ", res);
             _this.transitionTo( _this.getPath());
                location.reload(true);
    })
    .fail(function(error) {
    console.log("handleSubmit error ", error);
  })
  },
    
  render: function(){
    return (
      <div className="input-group">
      <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}> Submit </button>
        </span>
      </div>
    )
  }
});


module.exports = AddNote;