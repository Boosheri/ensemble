import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../api/post";
import { user } from "../api/user";

export class MyPostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Post.all().then(posts => {
      this.setState({ posts });
    });
}


  // deletepost(id) {
  //   // To change state in a React component, you must use the
  //   // `setState()` method on `this`. It takes an object that gets
  //   // merged in the current state at React's convenience.
  //   // The properties in `setState()` replace the same name properties
  //   // in the current state.
  //   // This happens asynchronously and will eventually trigger an update
  //   // to the DOM if there's any change.

  //   this.setState({
  //     posts: this.state.posts.filter(q => q.id !== id)
  //   });
  // }

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
              {/* buttonNode.addEventListener("click", event => ...) */}
              {/* <button onClick={() => this.deletepost(post.id)}>
                Delete
              </button> */}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
