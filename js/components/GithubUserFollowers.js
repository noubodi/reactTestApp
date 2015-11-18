var GithubUserFollowers = React.createClass({
   
 


    render: function() {
      var displayUsersFollowers = (userfollowers) => <div><h4>{userfollowers.name}</h4></div>;

        return (
            <ul>
                { this.props.userfollowers.map(displayUsersFollowers) }
            </ul>
        );

 
    }
});
 