import React from "react";
import "./About.css";

function About() {
  return (
    <div id="home">
      <div class="about-wrap">
        <video src='/videos/backdrop.mp4' alt="background video" autoPlay loop muted/>
        <div class="about">
          
          <div class="info">
            
            <h1>>About</h1>
            <img src="./images/cesar-pic.jpg" alt="Cesar"></img>
            <h3>Cesar Ochoa Navarro</h3>
            <p>Computer Science Major - Associate Software Engineer</p>
            <p>
              Hi. My name is Cesar Ochoa Navarro and I am a Computer Science Major
              working as an Associate Software Engineer in Portland, OR.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/cesaron/"
            target="_blank"
            class="fa fa-linkedin"
          ></a>
          <a
            href="https://github.com/CesarOchoaNavarro"
            target="_blank"
            class="fa fa-github"
          ></a>
        </div>
      </div>

      <div class="interests" id="interests">
        <h2>>Interests</h2>
      </div>

    </div>
  );
}

export default About;
