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
              I am experienced in various programming languages like Python, C++, Java, and more as well as experience in other areas like Pandas, NumPy, and Keras to name a few.
              I’m looking to further my programming experience and knowledge through connections and learning experiences.
              I recently accepted a position as a Associate Software Engineer and am excited
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
