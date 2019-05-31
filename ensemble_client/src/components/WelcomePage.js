import React, { Component } from "react"
import { images } from "./Images"
export class WelcomePage extends Component{
  constructor(props) {
    super(props);
    this.state =  {images,
    selectedImage: images[2] }
    }

    componentDidMount() {
      setInterval(() => {
        console.log('Changing image to ', this.state.selectedImage)
        this.setState(prevState => {
          if (this.state.selectedImage === this.state.images[0]) {
            return {
              selectedImage: this.state.images[1]
            };
          } else if (this.state.selectedImage === this.state.images[1]) {
            return {
              selectedImage: this.state.images[2]
            };
          } else if (this.state.selectedImage === this.state.images[2]) {
            return {
              selectedImage: this.state.images[3]
            };
          } else if (this.state.selectedImage === this.state.images[3]) {
            return {
              selectedImage: this.state.images[0]
            };
          } else {
            return {
              selectedImage: this.state.images[0]
            };
          }
        });
      }, 10000);
    }
      
    render() {
      return (
        <container className="welcome">
          <div className="welcome-image-div">
            <div className="welcome-text-div">
              <h1>Ensemble</h1>
              <p style={{fontWeight: "400", fontSize: "1.2em"}}>Helping you assemble your dream ensemble!</p>
            </div>
            <img className="welcome-image" src={this.state.selectedImage.src} />
          </div>
        </container>
    );
  }
}
