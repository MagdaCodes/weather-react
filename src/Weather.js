import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Warsaw",
    temperature: "22",
    wind: "20",
    day: "Tuesday",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type your city"
                  class="form-control city"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="FORCAST"
                  class="form-control btn btn-info "
                />
              </div>
              <div className="col-3">
                <button className="form-control btn btn-info">CURRENT</button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-4">
              <h1>
                <button className="units"> {weatherData.temperature}°F </button>{" "}
                |
                <button
                  href="#
                "
                  className="units"
                >
                  {" "}
                  °C{" "}
                </button>
              </h1>
            </div>
            <div className="col-3">
              <img
                src={weatherData.imgUrl}
                alt="Sunny"
                className="weather-icon"
              />
            </div>
            <div className="col-5">
              <h2>{weatherData.city}</h2>
              <ul />
              <li> Last Updated {weatherData.day}</li>
              <li> {weatherData.description}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/MagdaCodes/weather-react">Open-source </a>
    </div>
  );
}
