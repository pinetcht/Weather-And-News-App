import "../style/Styles.css";
import React, { useEffect, useState } from "react";

const Hourly = ({ lat, lon }) => {
  const [curWeather, setCurWeather] = useState(null);
  const [name, setName] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    let url = new URL("https://api.openweathermap.org/data/2.5/hourly");
    const API = import.meta.env.VITE_WEATHER_KEY;

    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", lon);
    url.searchParams.append("units", "metric");
    url.searchParams.append("appid", API);

    if (lat && lon) {
      const fetchData = async () => {
        const data = await fetch(url);
        const json = await data.json();

        console.log(json);

        if (json) {
          setCurWeather(json);
        }

        if (json && json.main) {
          setMinTemp(json.main.temp_min);
          setMaxTemp(json.main.temp_max);
        }

        if (json && json.weather && json.weather.length > 0) {
          setIcon(json.weather[0].icon);
          setDesc(json.weather[0].description);
        }
        if (json && json.name) {
          setName(json.name);
        }
      };
      fetchData();

      fetchData().catch(console.error);
    }
  }, [lat, lon]);

  return (
    <>
      {/* {hourly.slice(0,3).map((hour, index) => (
        <>
        <div key={index} style={{ height: "200px" }}> 
         <img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}.png"></img>
          <p>{hour.weather[0].description}</p>
          <p>{hour.temp}</p>
          <p>{hour.dt_txt}</p>
        </div>
        </>
      ))} */}

      <div className="box">
        <h3 className="boxHeader">Hourly forecast</h3>
        <div className="forecastBox">
          <div className="forecasts">
            <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
            <p>description:</p>
            <p>min temp: </p>
            <p>max temp: </p>
          </div>

          <div className="forecasts">
            <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
            <p>description</p>
            <p>min temp: </p>
            <p>max temp: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hourly;
