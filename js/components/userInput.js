var UserInput = React.createClass({
  getInitialState: function() {
    return {
      username: '',
    };
  },

 

  render: function() {
    return (
      <form onSubmit={this.addUser}>
          <input onChange={this.onChange} value={this.state.username} />
          <button>Add User</button>
      </form>
        
    );
  }
});
//mountNode
React.render(
  <UserInput />, document.getElementById('userInput') );