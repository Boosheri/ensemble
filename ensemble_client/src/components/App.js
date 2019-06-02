import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PostIndexPage } from "./PostIndexPage";
import { PostNewPage } from "./PostNewPage";
import { PostShowPage } from "./PostShowPage";
import { PostEditPage } from "./PostEditPage";
import { MyPostsPage } from "./MyPostsPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { SignInPage } from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
import { UserEditPage } from "./UserEditPage";
import { User } from "../api/user";
import { AuthRoute } from "./AuthRoute";
import { RelevantPostsPage } from "./RelevantPostsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }
  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return User.current()
      .then(user => {
        console.log(user);
        if (user.id) {
          this.setState({ currentUser: user });
        }
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  signOut = () => {
    this.setState({
      currentUser: null
    });
  };

  render() {
    if (this.state.loading) {
      return <div />;
    }

    return (
      <BrowserRouter>
        <div>
          <header className="nav-header">
            <NavBar
              currentUser={this.state.currentUser}
              onSignOut={this.signOut}
            />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route
              exact
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
              )}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />
              )}
            />
            <Route exact path="/posts" component={PostIndexPage} />
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              exact
              path="/my_posts"
              component={MyPostsPage}
            />
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              exact
              path="/relevant_posts"
              component={RelevantPostsPage}
            />
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              exact
              path="/posts/new"
              component={PostNewPage}
            />
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              exact
              path="/posts/:id/edit"
              render={PostEditPage}
            />
              {/* <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              exact
              path="/posts/:id/edit"
              render={routeProps => (
                <PostEditPage
                  {...routeProps}
                  onPostUpdate={this.getCurrentUser}
                />
              )}
            /> */}
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              path="/users/:id/edit"
              render={routeProps => (
                <UserEditPage
                  {...routeProps}
                  onUserUpdate={this.getCurrentUser}
                />
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={props => (
                <PostShowPage {...props} user={this.state.currentUser} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export { App };
