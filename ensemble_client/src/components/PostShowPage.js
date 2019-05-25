import React, { Component } from "react";
import { PostDetails } from "./PostDetails";
import { Post } from "../api/post";

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
    // <-- Instance method (Method on `this`)
    // This is for less efficient, only use when the method must
    // be passed as a callback and `this` is needed.
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
          <h2>Post doesn't exist!</h2>
        </main>
      );
    }

    return (
      <main className="Page">
        <PostDetails {...this.state.post} />

        <div>
          {/* <Link to={`/posts/${this.state.post.id}/edit`}>Edit</Link> */}
          <PrimaryButton
            text="Edit"
            iconProps={{ iconName: "edit" }}
            onClick={() =>
              this.props.history.push(
                `/posts/${this.state.post.id}/edit`
              )
            }
          />

          <PrimaryButton
            text="Delete"
            iconProps={{ iconName: "delete" }}
            onClick={this.deletePost}
          />
        </div>

      </main>
    );
  }
}
