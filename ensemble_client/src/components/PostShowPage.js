import React, { Component } from "react";
import { PostDetails } from "./PostDetails";
import { Post } from "../api/post";
import { Link } from "react-router-dom";
import { Follow } from "../api/follow";

export class PostShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(this.props);

    Post.one(id).then(post => {
      this.setState({
        post
      });
    });
  }

  deletePost = () => {
    if (window.confirm("Are you sure?")) {
      Post.delete(this.state.post.id).then(data => {
        this.props.history.push(`/posts`);
      });
    }
  };

  render() {
    if (!this.state.post) {
      return (
        <main className="Page">
          <h2>Loading Post...</h2>
        </main>
      );
    }
    console.log(this.state.post);
    return (
      <main className="Page post-container">
        <PostDetails {...this.state.post} />
        <div>
          <button onClick={() => console.log(Follow)}>Follow</button>

          <button
            onClick={() =>
              this.props.history.push(`/posts/${this.state.post.id}/edit`)
            }
          >
            Edit
          </button>
          <button onClick={() => this.deletePost()}>Delete</button>
        </div>
      </main>
    );
  }
}
