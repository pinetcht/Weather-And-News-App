const Hourly = ({ weather }) => {
  const hourly = weather.hourly;

  return (
    <>
      {hourly.slice(0,3).forEach((hour) => (
        <>
          <img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}.png"></img>
          <p>{hour.weather[0].description}</p>
          <p>{hour.temp}</p>
          <p>{hour.dt_txt}</p>
        </>
      ))}

      <p>hourly!</p>
    </>
  );
};

export default Hourly;
