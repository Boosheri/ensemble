import React, { Component } from "react";
import { Follow } from "../api/follow"
export class FollowButton extends React.Component {
  constructor() {
    super();
    this.state = {
      followed: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  // followPost = () => {
  //   const user = this.props.user
  //   const post = this.state.post;
  //   console.log(post + "----" + user);
  //   Follow.create( this.props.history.post.id).then(data => {
  //     this.props.history.push(`/posts/${data.id}`);
  //   });
  // };

  handleClick() {
    this.setState({
      followed: !this.state.followed
    }
    );
    // this.followPost()
  }
  
  render() {
    const label = this.state.followed ? 'Unfollow' : 'Follow'
    return (
        <button onClick={this.handleClick}>
          {label}</button>
    );
  }
}
