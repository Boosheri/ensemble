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
        <h2>My Posts</h2>
        <ul class="job-list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.posts.map(post => (
           <li key={post.id} class="job-post">
            <h3>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>{" "}
            </h3>
            <p>Prodution Type: {post.production_type}</p>
            <p>Gender: {post.gender}</p>
            <p>Aged: {post.min_age} - {post.max_age}</p>
            <p>Roles:</p> {post.roles.map(role => <p>{role.title}</p>)}

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
