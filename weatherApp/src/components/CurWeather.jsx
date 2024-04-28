import "../style/Grids.css";

const CurWeather = ({ weather }) => {
  // if (!weather) return null;

  // const temp = weather.current.temp;
  // const icon = weather.current.weather[0].icon;
  // const desc = weather.current.weather[0].description;

  // https://openweathermap.org/img/wn/10d@2x.png

  return (
    <>
      <div className="box">
        <h3>Current weather forecast</h3>
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

export default CurWeather;
