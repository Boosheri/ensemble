import React, { Component } from "react";
import { BASE_URL } from "../config";
import { User } from "../api/user";
import { UserDetails } from "./UserDetails";

export class UserShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    User.show(id).then(user => {
      this.setState({
        user
      });
    });
  }

  render() {
    if (!this.state.user) {
      return (
        <main className="Page">
          <h2>Loading User...</h2>
        </main>
      );
    }

    return (
      <main className="Page">
        <UserDetails {...this.state.user} />
        <div>
          <button
            onClick={() =>
              this.props.history.push(`/posts/${this.state.user.id}/edit`)
            }
          >
            Edit
          </button>
        </div>
      </main>
    );
  }
}
