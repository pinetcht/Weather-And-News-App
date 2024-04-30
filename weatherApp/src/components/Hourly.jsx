import "../style/Styles.css";
import React, { useEffect, useState } from "react";

const Hourly = ({ lat, lon }) => {
  const [hourlyInfo, setHourlyInfo] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    let url = new URL(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly"
    );
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

        if (json.list) {
          setHourlyInfo(json.list);
        }

        if (json && json.city.name) {
          setName(json.city.name);
        }
      };
      fetchData();

      fetchData().catch(console.error);
    }
  }, [lat, lon]);

  let Hourly = null;

  if (hourlyInfo && hourlyInfo.length > 0) {
    Hourly = hourlyInfo.slice(0, 4).map((hour, index) => {
      const minT = hour.main.temp_min;
      const maxT = hour.main.temp_max;
      const icon = hour.weather[0].icon;
      const desc = hour.weather[0].description;

      const dt_text = hour.dt_txt.split(" ")[1].substr(0,5);

      return (
        <div key={index}>
          <p>{dt_text}</p>
          <img
            src={"https://openweathermap.org/img/wn/" + icon + ".png"}
            alt="weather icon"
          ></img>
          <p>{desc}</p>
          <p>min temp: {minT} °C</p>
          <p>max temp: {maxT} °C</p>
        </div>
      );
    });
  }

  return (
    <>
      <div className="box">
        <h3 className="boxHeader">Hourly forecast</h3>
        <h4>{name}</h4>
        <div className="forecastBox">
          <div className="forecasts">{Hourly}</div>
        </div>
      </div>
    </>
  );
};

export default Hourly;
