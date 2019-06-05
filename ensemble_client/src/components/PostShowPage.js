import React, { Component } from "react";
import { PostDetails } from "./PostDetails";
import { FollowButton } from "./FollowButton";
import { Post } from "../api/post";
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

  followPost = () => {
    const user = this.props.user;
    const post = this.state.post;
    console.log(post + "----" + user);
    Follow.create(this.state.post.id).then(data => {
      this.props.history.push(`/posts/${data.id}`);
    });
  };

  render() {
    if (!this.state.post) {
      return (
        <main className="Page">
          <h2>Loading Post...</h2>
        </main>
      );
    }
    // console.log(this.state.post);
    return (
      <main className="Page post-container">
        <PostDetails {...this.state.post} />
        <div>
          {this.props.user.id == this.state.post.user_id ? (
            <span>
              <button
                onClick={() =>
                  this.props.history.push(`/posts/${this.state.post.id}/edit`)
                }
              >
                Edit
              </button>
              <button onClick={() => this.deletePost()}>Delete</button>
            </span>
          ) : (
            <span>
              <FollowButton {...this.state.post} />
              {/* <button onClick={() => this.followPost()}>
            Follow
          </button> */}
            </span>
          )}
        </div>
      </main>
    );
  }
}
