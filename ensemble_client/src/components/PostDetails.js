import React from "react";
import { User } from "../api/user";
import { Follow } from "../api/follow";

export function PostDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p> {props.body} </p>
      <p>Prodution Type: {props.production_type}</p>
            <p>Gender: {props.gender}</p>
            <p>Aged: {props.min_age} - {props.max_age}</p>
            {/* <p>Roles:</p> {props.roles.map(role => <p>{role.title}</p>)} */}
            
            {/* <button onClick={() => props.follows.create()}>Follow</button> */}
        <br />
        {/* <p> By {props.user && props.user.full_name} </p> */}
      <p> <small>Created at {props.created_at}</small></p>
    </div>
  );
}
