import React, { Component } from "react";
import { Post } from "../api/post";
import { PostForm } from "./PostForm";
import { FormErrors } from "./FormErrors";

export class PostNewPage extends Component {
  state = {
    errors: []
  };

  createPost(params) {
    Post.create(params).then(data => {
      if (!data.errors) {
        // The `history` prop is provide by the <Route>
        // component. It has a bunch of methods to manipulate
        // browser. You can use `push` to direct a user to any
        // page in our app.
        this.props.history.push(`/posts/${data.id}`);
      } else {
        this.setState({
          errors: data.errors
        });
      }
    });
  }

  render() {
    return (
      <main className="Page">
        <h1>Make a Post</h1>

        <FormErrors errors={this.state.errors} />

        <PostForm
          errors={this.state.errors}
          onSubmit={params => this.createPost(params)}
        />
      </main>
    );
  }
}
