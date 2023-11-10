import React from "react";
import photo from "./Images/airLine.jpg";
import "./CssAll/HomeStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      Flight deals from India
      <br />
      Here are the flight deals with the lowest prices. Act fast – they all
      depart within the next three months.
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={photo} class="card-img-top" alt="..." />

              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img src={photo} class="card-img-top" alt="..." />

              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now 
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={photo} class="card-img-top" alt="..." />

              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
