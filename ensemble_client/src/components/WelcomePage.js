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
    console.log(calcIndex);
    return images[calcIndex] && images[calcIndex].src;
  }

  render() {
    const image = this.getDisplayImage();
    console.log(image);
    return (
      <div className="welcome">
        <div className="welcome-image-div">
          <div className="welcome-text-div">
            <h1> Ensemble </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "1.2em"
              }}
            >
              {" "}
              Helping you assemble your dream ensemble!{" "}
            </p>
          </div>
          <img className="welcome-image" src={image} />
        </div>
      </div>
    );
  }
}
