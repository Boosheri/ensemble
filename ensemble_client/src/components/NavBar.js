import React from "react"
import { NavLink } from "react-router-dom"
import { Session } from "../api/session"
import film from '../film.jpg';

export function NavBar(props) {
  const { currentUser, onSignOut } = props
  function handleSignout(event) {
    event.preventDefault()

    Session.destroy().then(() => {
      onSignOut()
    })
  }

  return (
    <nav className="NavBar">
    
        <NavLink exact to="/">
        <img src={film} className="film-logo" alt="film" />
        </NavLink>
        <section>
    <ul class="menu">
        <li>
        <NavLink exact to="/posts">
            Posts
        </NavLink>
        </li>
        {currentUser ? (
        <React.Fragment>
        <li>
          <NavLink exact to="/posts/new">
            New Post
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/my_posts">
            My Posts
        </NavLink>
        </li>
        <li>
            <a onClick={handleSignout}>Sign Out</a>
        </li>
        <li>
          <NavLink exact to={`/users/${currentUser.id}/edit`}>
            {currentUser.full_name}
          </NavLink>
        </li>
        </React.Fragment>
        ) : (
        <>
        <li>
          <NavLink exact to="/sign_in">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sign_up">
            Sign Up
          </NavLink>
        </li>
        </>
      )}
      </ul>
      </section>
    </nav>
  )
}
