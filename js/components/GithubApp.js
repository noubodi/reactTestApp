var GithubApp = React.createClass({
   getInitialState: function() {
      return {
        user: '',
        userProps : [],
        users: [],
      };
    },

  getDefaultProps: function () {
    return { name: "Hello" };
  },

  onChange: function(e) {
      var user = e.target.value;
      this.setState({ user });
  },

  addUser: function(e) {
 
      $.get('https://api.github.com/users/'+this.state.user  , function(result) {
        console.log(result);
        
        var  newArr =  this.state.userProps;
        newArr.unshift(result);

          this.setState({
              userProps : this.state.userProps
          });
      }.bind(this));
      e.preventDefault();
  }, 
 
  render: function() {
    return (
      <div>
        
        <form onSubmit={this.addUser}>
            <input onChange={this.onChange} value={this.state.user} />
            <button>Add User</button>
        </form>

        <GithubUsersList users={this.state.userProps} />
        <GithubUser users={this.state.userProps} />
        
      </div>
    );
  }
});
//mountNode
React.render( <GithubApp />, document.getElementById('GithubApp') );