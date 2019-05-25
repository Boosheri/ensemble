import React from "react";

export function PostDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        By {props.user && props.user.full_name}
      </p>
      <p>
        <small>Created at {props.created_at}</small>
      </p>
    </div>
  );
}
