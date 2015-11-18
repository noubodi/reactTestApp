var GithubUser = React.createClass({
 
 


    render: function() {
      var displayUsers = (user) => <div><h1>{user.name}</h1>
                                      <a href={user.html_url} target="blank"><img src={user.avatar_url} className="img-thumbnail" /></a>
                                      <ul>
                                        <li>blog: <a href={user.blog}>{user.blog}</a></li>
                                        <li>bio: {user.bio}</li>
                                        <li>followers: {user.followers}</li>
                                        <li>following: {user.following}</li>
                                        <li>gists: {user.public_gists}</li>
                                        <li>repos: {user.public_repos}</li>
                                        <li>
                                        all: {JSON.stringify(user)}</li>
                                        <input type="button" value="Agregar >" />
                                      </ul>
                                    
                                    </div>;

        return (
            <ul>
                { this.props.users.map(displayUsers) }
            </ul>
        );

 
    }
});
 