import React from "react";
import { Link } from "react-router-dom";

export function PostList(props) {
  return (
    <ul
      className="job-list"
      style={{
        listStyle: "none",
        paddingLeft: 0
      }}
    >
      {props.map(post => (
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
  );
}
