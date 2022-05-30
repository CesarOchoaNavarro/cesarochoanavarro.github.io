import React from "react";
import "./About.css";

function About() {
  return (
    <section id="home">
      <div class="about-wrap">
        <video src='/videos/backdrop.mp4' alt="background video" autoPlay loop muted/>
        <div class="about">
          <div class="info">
            <img src="./images/cesar-pic.jpg" alt="Cesar"></img>
            <h3>Cesar Ochoa Navarro</h3>
            <p>Computer Science Major - Associate Software Engineer</p>
            <p>
              Hi, I'm Cesar and I am a fourth year Computer Science student at Portland State University.
              My interests outside of school include playing soccer/futsal, working out, hanging out with
              friends and cooking. I recently accepted a position as a Associate Software Engineer and am excited
              for what lies ahead!
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
    </section>
  );
}

export default About;
