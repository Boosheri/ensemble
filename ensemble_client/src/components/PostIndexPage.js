import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../api/post";

export class PostIndexPage extends Component {
  state = {
    posts: [],
    roles:[]
  };

  componentDidMount() {
    Post.all().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <main className="Page">
        <h2 style={{fontWeight: "600"}}>Posts</h2>
        {/* <h4 >Posts</h4> */}
        <Link to={`/relevant_posts`}>Filter by Roles on your Profile</Link>
        <ul className="job-list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.posts.map(post => (
              
            <li key={post.id} className="job-post">
            <h3>

              <Link to={`/posts/${post.id}`}>{post.title}</Link>{" "}
            </h3>
            <p>
              <span style={{fontWeight: "600"}}>Prodution Type: </span>
              {post.production_type}
            </p>
            <p>
              <span style={{fontWeight: "600"}}>Gender: </span>
              {post.gender}
            </p>
            <p>
              <span style={{fontWeight: "600"}}>Aged: </span>
              {post.min_age} - {post.max_age}
            </p>
            <p>
              <span style={{fontWeight: "600"}}>Roles:</span>
              {post.roles.map((role, index) => <span> {role.title}{index < post.roles.length - 1 ? ',\u00A0' : '' }</span> )}
            </p>

            </li>
          ))}
        </ul>
      </main>
    );
  }
}
