const CurWeather = ({ weather }) => {
  if (!weather) return null;

  const temp = weather.current.temp;
  const icon = weather.current.weather[0].icon

  // https://openweathermap.org/img/wn/10d@2x.png

  return (
    <>
      <img src='https://www.w3schools.com/images/w3schools_green.jpg' alt='sunny'/>
      <p>{temp}</p>
    </>
  );
};

export default CurWeather;
