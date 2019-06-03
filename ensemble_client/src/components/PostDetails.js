import React from "react";

export function PostDetails(props) {
  return (
    <div>
      <h3 className="job-title">{props.title}</h3>
      <h5 className="post-description"> {props.body} </h5>

      <p>
        <span style={{ fontWeight: "600" }}>Prodution Type: </span>
        {props.production_type}
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Gender: </span>
        {props.gender}
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Age Range: </span>
        {props.min_age} - {props.max_age}
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Company: </span>
        {props.company}
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Production Type: </span>
        {props.production_type}
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Union: </span>
        {/* {props.union} */}No
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Paid: </span>
        {/* {props.paid} */}Yes
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Contact Name: </span>
        {props.contact_name}
      </p>

      <p>
        <span style={{ fontWeight: "600" }}>Contact Email: </span>
        {props.contact_email}
      </p>

      {/* <p>Roles:</p> {props.roles.map(role => <p>{role.title}</p>)} */}

      {/* <button onClick={() => props.follows.create()}>Follow</button> */}
      {/* <br /> */}
      {/* <p> By {props.user && props.user.full_name} </p> */}
      <p>
        {" "}
        <small>Published on: {props.created_at}</small>
      </p>
    </div>
  );
}
// roles: formData.get("roles"),
