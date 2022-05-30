import React from "react";
import "./Projects.css";

function Projects() {
  return (
      <div class="project" id="projects">
        <h2>>Projects</h2>

        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4>Stock Price Predictor</h4>
                  <p>This program uses Long Short Term Memory (LSTM) to predict the closing stock price of Tesla 
                    (or any other Stock) using the last 60 day stock price between the dates 2015-01-01 to 2020-12-16.
                  </p>
                  <p id="frameworks">
                  Python, Numpy, Keras, Matplotlib,
                  Pandas, Scikit & Scipy
                </p>
                </div>
                  <a
                  href="https://github.com/CesarOchoaNavarro/StockPricePredictor"
                  target="_blank"
                  class="fa fa-github"
                  ></a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4>FastStats</h4>
                  <p>FastStats is a NBA statistic website that displays information about Teams and Players
                    in the NBA. Some features include a search and display function for individual players, daily schedule, and comparison.
                  </p>
                  <p id="frameworks">
                  JS, HTML, CSS, React
                  </p>
                </div>
                  <a
                  href="https://github.com/ntommy06/CS410P-FinalProject"
                  target="_blank"
                  class="fa fa-github"
                  ></a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4>LaLigaStats</h4>
                  <p>Created a website that displays current LaLiga games and standing while also
                    providing streams for each game. Scores are updated in real time and an in depth comparison
                    between both teams is available.
                  </p>
                  <p id="frameworks">
                  JS, HTML, CSS, React
                  </p>
                </div>
                  <a
                  href="https://github.com/CesarOchoaNavarro/LaLigaStats"
                  target="_blank"
                  class="fa fa-github"
                  ></a>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
}

export default Projects;