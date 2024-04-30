import React, { useEffect, useState } from "react";
import '../style/Styles.css';
import CurWeather from './CurWeather'
import Daily from './Daily'
import Hourly from './Hourly'
import News from './News'

const WeatherApp = () => {
    const [query, setQuery] = useState("");
    // const [geocode, setGeocode] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null)
    const [loading, setLoading] = useState(false);


    const handleClick = async (event) => {
        event.preventDefault();

        const API = import.meta.env.VITE_WEATHER_KEY;
        let url2 = new URL("http://api.openweathermap.org/geo/1.0/direct");    

        url2.searchParams.append("q", query);
        url2.searchParams.append("appid", API);

        try {
            setLoading(true);
            const data = await fetch(url2);
            const json = await data.json();

            if (json && json[0]) {
                setLat(json[0].lat);
                setLon(json[0].lon)
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
            <h1>Weather and News App</h1>
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
                    <button type="submit">Enter</button>
                </form>
            </div>

            <div className="grid">
                <div> <CurWeather lat={lat} lon={lon} /></div>
                <div> <Hourly lat={lat} lon={lon}></Hourly></div>
                <div> <Daily lat={lat} lon={lon}> </Daily></div>
                <div className="box"><h3> <News/></h3></div>
            </div>

            {/* <pre>{JSON.stringify(geocode, null, 2)}</pre>
            <pre>{JSON.stringify(weather, null, 2)}</pre> */}
            <p>{lat}</p>
            <p>{lon}</p>
        </>
    );
};

export default WeatherApp;
