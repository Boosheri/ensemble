import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../api/post";
import { User } from "../api/user";

export class RelevantPostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Post.relevant().then(posts => {
      this.setState({ posts });
      console.log(posts);
    });
  }

  render() {
    console.log(this.state.posts);

    return (
      <main className="Page">
        <h2>Ensemble Job Listings For You</h2>
        <Link to={`/posts`}>Remove Filter</Link>

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
                  <span style={{ fontWeight: "600" }}>Roles:</span>
                  {post.roles.map((role, index) => (
                    <span>
                      {" "}
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
