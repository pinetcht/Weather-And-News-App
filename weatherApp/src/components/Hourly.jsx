import "../style/Styles.css";

const Hourly = ({ weather }) => {
  //   if (!weather) return null;

  //   const hourly = weather.hourly;

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
