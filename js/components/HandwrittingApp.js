var HandwrittingApp = React.createClass({
   getInitialState: function() {
      return {
        user: '',
        users: [],
        userObjects: []
      };
    },

  onChange: function(e) {
      var user = e.target.value;

      this.setState({ user });

  },
// KEY: PH9RR8SJE5HRW3DQ
// SECRET: H150MF1501WK9ZNR

  Submit: function(e) {
      this.setState({
          users: this.state.users.concat([this.state.user]),
          user:  this.state.user ,
 
      });
      $.get('https://api.github.com/users/'+this.state.user  , function(result) {
        var thisGitUser = result ;
         users: this.state.userObjects.concat([thisGitUser]),
        console.log(result);
        if (this.isMounted()) {
          this.setState({
            userInfo: thisGitUser,
            login: thisGitUser.login,
            name: thisGitUser.name,
            avatar_url: thisGitUser.avatar_url,
            html_url: thisGitUser.html_url,
            gists_url: thisGitUser.gists_url
          });
        }
      }.bind(this));
      // alert(this.state.user);
      e.preventDefault();
  },  

  render: function() {
    return (
      <div>
        
        <form onSubmit={this.GithubUser.addUser}>
            <input onChange={this.onChange} value={this.state.user} />
            <button>Add User</button>
        </form>

        <GithubUsersList users={this.state.users} />
        <GithubUser user={this.state.user} users={this.state.users} />
        
      </div>
    );
  }
});
//mountNode
React.render( <HandwrittingApp />, document.getElementById('HandwrittingApp') );