import "../style/Grids.css";

const Daily = ({ weather }) => {
  //   if (!weather) return null;

  //   const daily = weather.daily;

  return (
    <>
      {/* {daily.slice(0, 3).forEach((day) => (
        <>
          <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png"></img>
          <p>{day.weather[0].description}</p>
          <p>min temp: {day.temp.min}</p>
          <p>max temp: {day.temp.max}</p>
        </>
      ))} */}

      <div className="box">
        <h3 className="boxHeader">Daily forecast</h3>
        <div className="forecastBox">
          <div className="forecasts">
            <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
            <p>description</p>
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

export default Daily;
