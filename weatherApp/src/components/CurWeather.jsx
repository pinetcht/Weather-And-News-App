import "../style/Styles.css";
import React, { useEffect, useState } from "react";

const CurWeather = ({ lat, lon }) => {
  const [curWeather, setCurWeather] = useState(null);
  const [name, setName] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    let url = new URL("https://api.openweathermap.org/data/2.5/weather");
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

  console.log(curWeather);

  return (
    <>
      <div className="box">
        <h3>Current weather forecast</h3>
        <h4>{name}</h4>
        <div className="forecastBox">
          {curWeather && (          
            <div className="forecasts">
              <div>
                <img
                  src={"https://openweathermap.org/img/wn/" + icon + ".png"}
                  alt="Weather icon"
                />
                <p>{desc}</p>
                <p> {minTemp} °C / {maxTemp} °C</p>
                {/* <p>max temp: {maxTemp} °C</p> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CurWeather;
