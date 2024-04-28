import React, { useEffect, useState } from "react";
import '../style/Grids.css';
import CurWeather from './CurWeather'

const WeatherApp = () => {
    const [query, setQuery] = useState("");
    const [geocode, setGeocode] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const API = import.meta.env.VITE_WEATHER_KEY;
    let url = new URL("http://api.openweathermap.org/geo/1.0/direct");


    useEffect(() => {
        if (geocode) {
            const lat = geocode.lat;
            const lon = geocode.lon;
            let url2 = new URL("https://api.openweathermap.org/data/2.5/onecall");
            url2.searchParams.append("lat", lat);
            url2.searchParams.append("lon", lon);
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

    const handleClick = async (event) => {
        event.preventDefault();

        url.searchParams.append("q", query);
        url.searchParams.append("appid", API);

        try {
            setLoading(true);
            const data = await fetch(url);
            const json = await data.json();
      
            if (json && json[0]) {
              setGeocode(json[0]);
            }
          } catch (error) {
            console.error('Error fetching geocode data:', error);
          } finally {
            setLoading(false);
          }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <h1>helloooo</h1>
            <div>
                <form id="searchLocation" onSubmit={handleClick}>
                    <label id="locationLabel" htmlFor="location">
                        Enter a Location:
                    </label>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        id="location"
                        name="location"
                    ></input>
                    <button type="submit" disabled={loading}>Enter</button>
                </form>
            </div>

            <div className="grid">
                <div className="box"> <CurWeather /></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <pre>{JSON.stringify(geocode, null, 2)}</pre>
        </>
    );
};

export default WeatherApp;
