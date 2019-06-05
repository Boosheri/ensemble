import React, { Component } from "react";

export class FollowButton extends React.Component {
  constructor() {
    super();
    this.state = {
      followed: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    this.setState({
      followed: !this.state.followed
    });
  }
  
  render() {
    const label = this.state.followed ? 'Unfollow' : 'Follow'
    return (
        <button onClick={this.handleClick}>
          {label}</button>
    );
  }
}
