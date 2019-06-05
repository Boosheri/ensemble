import React from "react";
// import sansa from "../sansa.png";

export function UserDetails(props) {
  return (
    <div className="profile">
      <div>
        <div className="headshot" />
      </div>

      <div className="profile-info">
        <h3 className="job-title">{props.full_name}</h3>
        
        <h5 className="post-description"> {props.profile.about} </h5>
        <p>
          <span style={{ fontWeight: "600" }}>Birth Date: </span>
          {props.profile.birth_date}
        </p>

        <p>
          <span style={{ fontWeight: "600" }}>Gender: </span>
          {props.profile.gender}
        </p>

        <p>
          <span style={{ fontWeight: "600" }}>Roles: </span>
          {/* {props.profile.roles} */} Actor, Producer
        </p>

        <p>
          <span style={{ fontWeight: "600" }}>Languages Spoken: </span>
          {props.profile.languages}
        </p>

        <p>
          <span style={{ fontWeight: "600" }}>Contact Email: </span>{" "}
          <a href="mailto:sample@email.com">{props.email}</a>
        </p>
      </div>
    </div>
  );
}
