var GithubUsersList = React.createClass({
    
     render: function() {
        var displayUsers = (user) => <li>{name = (user.name ? user.name : user.login )}</li>;

        return (
            <ul>
                { this.props.users.map(displayUsers) }
            </ul>
        );
    }
 
});
 