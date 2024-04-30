import "../style/Styles.css";

const CurWeather = ({ lat, lon }) => {
  // if (!weather) return null;

  const [curWeather, setCurWeather] = useState(null)

  useEffect(() => {
    if (lat & lon) {
      let url = new URL("https://api.openweathermap.org/data/2.5/weather");
      const API = import.meta.env.VITE_WEATHER_KEY;

      url.searchParams.append("lat", lat);
      url.searchParams.append("lon", lon);
      url.searchParams.append("metric", "units");
      url.searchParams.append("appid", API);

      const fetchData = async () => {
          const data = await fetch(url);
          const json = await data.json();

          console.log(json);

          if (json) {
              setCurWeather(json);
          }
      };
      fetchData();

      fetchData().catch(console.error);

    }
}, []);

  const minTemp = curWeather.main.temp_min;
  const maxTemp = curWeather.main.temp_max;
  const icon = curWeather.weather[0].icon;
  const desc = curWeather.weather[0].description;
  const name = curWeather.name;

  https://openweathermap.org/img/wn/10d@2x.png

  return (
    <>
      <div className="box">
        <h3>Current weather forecast</h3>
        <div className="forecastBox">
          <div className="forecasts">
            <h4>Current weather in {name}</h4>
            <img src="https://openweathermap.org/img/wn/{icon}.png"></img>
            <p>description: {desc}</p>
            <p>min temp: {minTemp}</p>
            <p>max temp: {maxTemp}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurWeather;
