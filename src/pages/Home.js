import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <body id="homeBody">
        <div>
            <div class="columns">
                <h1>About Me</h1>
                <p>Hello! My name is Cesar Ochoa Navarro and this will be my last term here at Portland State as I will be graduating in June (hopefully)! I love playing and watching football (soccer) 
            and enjoy working out with friends or alone.</p>
            </div>
            <div class="columns dev-image"></div>

        </div>
      </body>
    );
  }
}

export default Home;