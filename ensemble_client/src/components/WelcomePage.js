import React, { Component } from "react";
import { images } from "./Images";
export class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 3
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Changing image to ", this.state.selectedImage);
      this.setState(prevState => {
        return {
          currentImageIndex: prevState.currentImageIndex + 1
        };
      });
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getDisplayImage() {
    const { currentImageIndex } = this.state;
    const calcIndex = currentImageIndex % images.length;
    return images[calcIndex] && images[calcIndex].src;
  }

  render() {
    const image = this.getDisplayImage();

    return (
      <div className="welcome">
        <div className="welcome-image-div">
          <div className="welcome-text-div">
            <h1 style={{ fontSize: "5em" }}> Ensemble </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "1.85em",
                lineHeight: "1.2em"
              }}
            >
              Assemble your dream creative team for film and theatre.
            </p>
          </div>
          <img className="welcome-image" src={image} alt="welcome banner" />
        </div>
        <div className="welcome-card">
          <div className="welcome-card-text">
            <h4>Sidestep the Gatekeepers</h4>
            <p>
              With performance based industries being so difficult to penetrate
              as a newcomer, finding work has always been a struggle in the
              arts. Ensemble was built to remedy the inaccessability of the
              industry. Whether you are a casting director looking for new
              blood, or a director on the hunt for your next project, Ensemble
              is a bridge between creatives, creative communities, and the
              creative industry at large.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
