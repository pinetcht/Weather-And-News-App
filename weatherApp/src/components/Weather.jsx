import React, { useEffect, useState } from "react";
import '../style/Styles.css';
import CurWeather from './CurWeather'
import Daily from './Daily'
import Hourly from './Hourly'
import News from './News'

const WeatherApp = () => {
    const [query, setQuery] = useState("");
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);


    const handleClick = async (event) => {
        event.preventDefault();

        const API = import.meta.env.VITE_WEATHER_KEY;
        let url = new URL("http://api.openweathermap.org/geo/1.0/direct");    

        url.searchParams.append("q", query);
        url.searchParams.append("appid", API);

        try {
            const data = await fetch(url);
            const json = await data.json();

            if (json && json[0]) {
                setLat(json[0].lat);
                setLon(json[0].lon)
            }
        } catch (error) {
            console.error('Error fetching hourly weather data:', error);
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
                <div ><News/></div>
            </div>

        </>
    );
};

export default WeatherApp;
