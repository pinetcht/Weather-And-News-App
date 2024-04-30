import "../style/Styles.css";
import React, { useEffect, useState } from "react";

const Daily = ({ lat, lon }) => {

  const [dailyInfo, setDailyInfo] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    let url = new URL(
      "https://api.openweathermap.org/data/2.5/forecast/daily"
    );
    const API = import.meta.env.VITE_WEATHER_KEY;

    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", lon);
    url.searchParams.append("cnt", "5");
    url.searchParams.append("units", "metric");
    url.searchParams.append("appid", API);

    if (lat && lon) {
      const fetchData = async () => {
        const data = await fetch(url);
        const json = await data.json();

        if (json.list) {
          setDailyInfo(json.list);
        }

        if (json && json.city.name) {
          setName(json.city.name);
        }
      };
      fetchData();

      fetchData().catch(console.error);
    }
  }, [lat, lon]);

  let Daily = null;

  if (dailyInfo && dailyInfo.length > 0) {
    Daily = dailyInfo.map((day, index) => {
      const minT = day.temp.min;
      const maxT = day.temp.max;
      const icon = day.weather[0].icon;
      const desc = day.weather[0].description;


      const dt = day.dt;
      let date = new Date(dt * 1000);
      date = date.toLocaleString().split(" ")[0].replace(",","")

      return (
        <div key={index}>
          <p>{date}</p>
          <img
            src={"https://openweathermap.org/img/wn/" + icon + ".png"}
            alt="weather icon"
          ></img>
          <p>{desc}</p>
          <p>{minT} °C / {maxT} °C</p>
          {/* <p>max temp: </p> */}
        </div>
      );
    });
  }

  return (
    <>
      <div className="box day">
        <h3 className="boxHeader">Daily forecast</h3>
        <h4>{name}</h4>
        <div className="forecastBox">
          <div className="forecasts">{Daily}</div>
        </div>
      </div>
    </>
  );
};

export default Daily;
