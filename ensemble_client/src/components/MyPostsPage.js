import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../api/post";

export class MyPostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Post.user().then(posts => {
      this.setState({ posts });
    });
  }

  deletePost = id => {
    if (window.confirm("Are you sure?")) {
      Post.delete(this.state.post.id).then(data => {
        this.props.history.push(`/posts`);
      });
    }
  };

  render() {
    return (
      <main className="Page">
        <h2>My Ensemble Job Listings</h2>
        
        <ul
          className="job-list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.posts.map(post => (
            <li key={post.id} className="job-post-section">
              <div className="job-post">
                <h3>
                  <Link className="job-title" to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>{" "}
                </h3>
                <p>
                  <span style={{ fontWeight: "600" }}>Prodution Type: </span>
                  {post.production_type}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Gender: </span>
                  {post.gender}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Aged: </span>
                  {post.min_age} - {post.max_age}
                </p>
                <p>
                   <span style={{ fontWeight: "600" }}>Roles: </span>
                {post.roles.map((role, index) => (
                  <span key={index}>
                    {role.title}
                    {index < post.roles.length - 1 ? ",\u00A0" : ""}         
                  </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
