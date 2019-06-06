import React, { Component } from "react";
import { PostDetails } from "./PostDetails";
import { Post } from "../api/post";
// import { Follow } from "../api/follow";

export class PostShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      followed: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Post.one(id).then(post => {
      this.setState({
        post
      });
      this.setState({
        followed: false,
      })
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
    if (this.state.followed) {
      // Follow.delete(this.state.post.id).then(data => {
      //   console.log("unfollow>", data)
      //   this.props.history.push(`/posts/${this.state.post.id}`);
        this.setState({
            followed: false
          })
        // });
      } else {
        // Follow.create(this.state.post.id).then(data => {
        //   console.log("follow>", data)
        // this.props.history.push(`/posts/${data.id}`);
        this.setState({
          followed: true
        })
      // });
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
    return (
      <main className="Page post-container">
        <PostDetails {...this.state.post} />
        <div>
          {this.props.user.id === this.state.post.user_id ? (
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
              <button onClick={() => this.followPost()}>
                {this.state.followed ? "Unfollow" : "Follow"}
              </button>
            </span>
          )}
        </div>
      </main>
    );
  }
}
