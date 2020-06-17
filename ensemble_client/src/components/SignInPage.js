import React from "react";
import { Session } from "../api/session";

export function SignInPage(props) {
  const { onSignIn } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);
    const signInParams = {
      email: fD.get("email"),
      password: fD.get("password")
    };

    Session.create(signInParams).then(response => {
      if (response.id) {
        onSignIn();
        props.history.push("/posts");
      }
    });
  }

  return (
    <main className="Page">
      <div className="form">
        <h1>Sign In</h1>
        <form className="sign-in" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" value="Sign In">
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
