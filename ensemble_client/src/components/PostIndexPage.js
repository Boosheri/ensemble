import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../api/post";

export class PostIndexPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Post.all().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <main className="Page">
        <h2>Posts</h2>
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

            </li>
          ))}
        </ul>
      </main>
    );
  }
}
