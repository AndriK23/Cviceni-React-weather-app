import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Forecast from "./components/Forecast";
import { filterForecast } from "./functions";
import {cities} from "./functions";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");
  const [forecast, setForecast] = useState(null);

  //const API_key = process.env.REACT_APP_MY_API_ID;
  const API_key = "008bd9effa179ed813da02c0c8b5ec76";

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  const fetchForecast = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(filterForecast(data.list))
        /*console.log(data.list)*/
      },);    
  };

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);

  /*
  const handleButtonClick = (event) => {
    return setCity(event.target.innerText);
  };
  */

 const onCityChange = (event) => {
  setCity(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={onCityChange}
          >
            {cities.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
       
        <div className="weather">
          {/*
            <div className="button-group">
              <button onClick={handleButtonClick} className="button">
              Prague
              </button>
              <button onClick={handleButtonClick} className="button">
                Reykjavik
              </button>
              <button onClick={handleButtonClick} className="button">
                Tenerife
              </button>
            </div>
          */}
          
          <Main weather={weather} />

          <div className="weather__forecast" id="predpoved">
            {forecast?.map((forecast, index) => (
              <Forecast key={index} forecast={forecast} />
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

export default App;
