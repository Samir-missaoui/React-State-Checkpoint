import React, { Component } from "react";
import myWonderfulImage from "./téléchargement.png";
class App extends Component {
  constructor() {
    super();
    this.FirstName = "Samir";
    this.LastName = "Missaoui";
    this.age = 28;
    this.nation = "Tunisian";
    this.prof = "engineer and web developer";
    this.img = myWonderfulImage;
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          TRUE
        </button>
        {this.state.show ? (
          <div style={{ color: "red", fontSize: 30, textAlign: "center" }}>
            <h1>Welcome in my state checkpoint</h1>
            <h2>My bio</h2>
            <p>
              My name is {this.FirstName} {this.LastName}
            </p>
            <p>My age is {this.age}</p>
            <p>I'm an {this.prof}</p>
            <p>I'm {this.nation} </p>
            <img src={this.img} alt="myImage" />
          </div>
        ) : null}
      </>
    );
  }
}

export default App;
