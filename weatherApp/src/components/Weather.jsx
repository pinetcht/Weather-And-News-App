import React, { useEffect, useState } from "react";

const WeatherApp = () => {
    const [query, setQuery] = useState("")
    const [geocode, setGeocode] = useState(null)
    const [weather, setWeather] = useState(null)

    const API = import.meta.env.VITE_WEATHER_KEY;
    let url = new URL ("http://api.openweathermap.org/geo/1.0/direct");

    url.searchParams.append("q", "london")
    url.searchParams.append("appid", API)


    useEffect(() => {
        const fetchData = async() => {
            const data = await fetch(url);          
            const json = await data.json();


            if (json[0] != null) {
                setGeocode(json[0])
            }
            

        }
        fetchData();
        fetchData().catch(console.error)

    }, [url])


    useEffect(() => {
        if(geocode) {
            const lat = geocode.lat
            const lon = geocode.lon
            let url2 = new URL ("https://api.openweathermap.org/data/2.5/onecall")
            url2.searchParams.append("lat", lat)
            url2.searchParams.append("lon", lon)
            url2.searchParams.append("appid", API)

            const fetchData = async() => {
                const data = await fetch(url2);          
                const json = await data.json();
    
                console.log(json);
                
                if (json[0] != null) {
                    setWeather(json[0])
                }
    
                console.log(weather)
    
            }
            fetchData();

            fetchData().catch(console.error)
        }

    }, [geocode])

   
    return (
        <>
            <h1>helloooo</h1>
            <form id='searchLocation'>
                <label id='locationLabel' for='location'>Enter a Location:</label>
                <input type='text' id='location' name='location'></input>
            </form>
            <pre>{JSON.stringify(geocode, null, 2)}</pre>
            {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
        </>
    );
}

export default WeatherApp;

