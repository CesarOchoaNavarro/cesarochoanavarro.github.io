import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <body class="home-body">

        <div class="about-wrap">
          <div class="about">
            <div class="info">
              <h1>ABOUT ME</h1>
              <img src="./cesar-pic.jpg" alt="Cesar"></img>
              <h3>Cesar Ochoa Navarro</h3>
              <p>Computer Science Major - Associate Software Engineer</p>
              <p>
                Hi. My name is Cesar Ochoa Navarro and I am a Computer Science Major working
                as an Associate Software Engineer
                in Portland,OR.
              </p>
            </div>
          
          <a href="https://www.linkedin.com/in/cesaron/" target="_blank" class="fa fa-linkedin"></a>
          <a href="https://github.com/CesarOchoaNavarro" target="_blank" class="fa fa-github"></a>
          

          </div>
        </div>
      </body>
    );
  }
}

export default Home;