import "../style/Styles.css";

const News = () => {

    const [news, setNews] = useState(null);

    const API = import.meta.env.VITE_WEATHER_KEY;
    let url = new URL("http://api.openweathermap.org/geo/1.0/direct");

    useEffect(() => {
        if (geocode) {
            const lat = geocode.lat;
            const lon = geocode.lon;
            let url2 = new URL("https://api.openweathermap.org/data/2.5/onecall");
            url2.searchParams.append("lat", lat);
            url2.searchParams.append("lon", lon);
            url2.searchParams.append("metric", "units");
            url2.searchParams.append("appid", API);

            const fetchData = async () => {
                setLoading(true)
                const data = await fetch(url2);
                const json = await data.json();

                console.log(json);

                if (json[0] != null) {
                    setWeather(json[0]);
                }
            };
            fetchData();
            setLoading(false)

            fetchData().catch(console.error);

        }
    }, [geocode]);

    return (
    <>
     <h3>News</h3>
    </>
  );
};

export default News;
