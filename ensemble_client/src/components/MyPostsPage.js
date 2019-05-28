import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../api/post";
import { User } from "../api/user";

export class MyPostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Post.user().then(posts => {
      this.setState({ posts });
    });
}

  deletePost = (id) => {
    if (window.confirm("Are you sure?")) {
      Post.delete(this.state.post.id).then(data => {
        this.props.history.push(`/posts`);
      });
    }
  };

  render() {
    return (
      <main className="Page">
        <h2>Posts</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>{" "}
              <div>
                <button onClick={() => this.props.history.push(
                    `{/posts/${this.state.post.id}/edit}`)}>Edit</button>
                  <button onClick={() => this.deletePost()}>Delete</button>
                </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
