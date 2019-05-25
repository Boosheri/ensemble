import React, { Component } from "react"
// import logo from '../logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PostIndexPage } from "./PostIndexPage"
import { MyPostsPage } from "./MyPostsPage"
import { WelcomePage } from "./WelcomePage"
import { NavBar } from "./NavBar"
import { SignInPage } from "./SignInPage"
import { SignUpPage } from "./SignUpPage"
import { User } from "../api/user"
import { AuthRoute } from "./AuthRoute"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      loading: true,
    }
  }
  componentDidMount() {
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current()
      .then(user => {
        if (user.id) {
          this.setState({ currentUser: user })
        }
        this.setState({ loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }
  signOut = () => {
    this.setState({
      currentUser: null,
    })
  }

  render() {
    if (this.state.loading) {
      return <div />
    }

    return (
      <BrowserRouter>
        <div>
          <header class="nav-header">
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
            <Route
              exact
              path="/my_posts"
              render={routeProps => (
                <MyPostsPage {...routeProps} component={MyPostsPage} />
              )}
            />
            <Route exact path="/posts" component={PostIndexPage} />

            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export { App }


