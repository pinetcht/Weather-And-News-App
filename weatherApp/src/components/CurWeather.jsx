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
        <div style={{ display: "flex" }}>
          <div style={{ height: "200px" }}>
            <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
            <p>description</p>
            <p>min temp: </p>
            <p>max temp: </p>
          </div>

          <div style={{ height: "200px" }}>
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
