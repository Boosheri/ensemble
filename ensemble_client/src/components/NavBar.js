import React from "react"
import { NavLink } from "react-router-dom"
import { Session } from "../api/session"

export function NavBar(props) {
  const { currentUser, onSignOut } = props
  function handleSignout(event) {
    event.preventDefault()

    Session.destroy().then(() => {
      // ... do something after we destroy session
      onSignOut()
    })
  }

  return (
    <nav className="NavBar">
    <ul class="menu"><li>
      <NavLink exact to="/">
        Welcome
      </NavLink></li><li>
      <NavLink exact to="/posts">
        Posts
      </NavLink></li>
      {currentUser ? (
        <React.Fragment>
        <li>
          <NavLink exact to="/posts/new">
            Post
          </NavLink></li>
<li>
          <NavLink exact to="/my_posts">
            My Posts
          </NavLink></li>

         <li> <a onClick={handleSignout}>Sign Out</a></li>
<li>
          <NavLink exact to={`/users/${currentUser.id}/edit`}>
            {currentUser.full_name}
          </NavLink></li>
        </React.Fragment>
      ) : (
        <>
          <NavLink exact to="/sign_in">
            Sign In
          </NavLink>
          <NavLink exact to="/sign_up">
            Sign Up
          </NavLink>
        </>
      )}
      </ul>
    </nav>
  )
}
