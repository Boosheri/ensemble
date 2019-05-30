import React, { Component } from "react"
import { images } from "./Images"
export class WelcomePage extends Component{
  constructor(props) {
    super(props);
    this.state =  {images,
    selectedImage: "cam.jpg" }
    }

    componentDidMount() {
      setInterval(() => {
        console.log('Changing image to ', this.state.selectedImage)
        this.setState(prevState => {
          if (this.state.selectedImage === this.state.images[0]) {
            return {
              selectedImage: this.state.images[1]
            };
          } 
          else if (this.state.selectedImage === this.state.images[1]) {
            return {
              selectedImage: this.state.images[2]
            };
          } 
          else if (this.state.selectedImage === this.state.images[2]) {
            return {
              selectedImage: this.state.images[3]
            };
          } 
          else if (this.state.selectedImage === this.state.images[3]) {
            return {
              selectedImage: this.state.images[4]
            };
          } 
          else if (this.state.selectedImage === this.state.images[4]) {
            return {
              selectedImage: this.state.images[5]
            };
          } 
          else if (this.state.selectedImage === this.state.images[5]) {
            return {
              selectedImage: this.state.images[0]
            };
          } 
          else {
            return {
              selectedImage: this.state.images[0]
            };
          }
        });
      }, 10000);
    }
      
    render() {
      return (
      <main className="Page">
        <h1>Ensemble</h1>
        <p>Helping you assemble your dream ensemble!</p>
        {/* <div className="welcome-image"> */}
          <img className="welcome-image" src={this.state.selectedImage.src} />
        {/* </div> */}
      </main>
    );
  }
}
