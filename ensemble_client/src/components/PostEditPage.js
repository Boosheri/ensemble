import React, { Component } from "react";
import { PostForm } from "./PostForm";
import { Post } from "../api/post";
import { FormErrors } from "./FormErrors";

export class PostEditPage extends Component {
  state = {
    loading: true,
    post: null,
    errors: []
  };

  updatePost = params => {
    const { post } = this.state;
    Post.update(post.id, params).then(data => {
      if (data.errors) {
        this.setState({ errors: data.errors });
      } else {
        this.props.history.push(`/posts/${post.id}`);
      }
    });
  };

  loadPost() {
    Post.one(this.props.match.params.id)
      .then(post => {
        this.setState({
          post,
          loading: false
        });
        console.log(post);
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.loadPost();
  }

  render() {
    const { errors, loading, post } = this.state;

    if (loading) {
      return (
        <main className="Page">
          <h1>Loading...</h1>
        </main>
      );
    }

    return (
      <main className="Page">
        <h1>Edit Post</h1>
        <FormErrors errors={this.state.errors} />
        <PostForm
          data={post}
          errors={errors}
          onSubmit={this.updatePost}
        />
      </main>
    );
  }
}
