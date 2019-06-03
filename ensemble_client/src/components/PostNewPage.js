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
      <main className="Page post-container">
        <h1>Create a New Ensemble Listing</h1>

        <FormErrors errors={this.state.errors} />

        <PostForm
          errors={this.state.errors}
          onSubmit={params => this.createPost(params)}
        />
      </main>
    );
  }
}
