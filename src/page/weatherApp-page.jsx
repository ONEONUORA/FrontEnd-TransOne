
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";
import { Navigate, Link } from "react-router-dom";

const WeatherApp = () => {
    let {userAuth:{access_token, fullname}} = useContext(UserContext)
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity, // from the console
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  };

  useEffect(() => {
    search("Toronto"); // Use a valid city name for initial data fetching
  }, []);

  return (

    access_token == null ? <Navigate to='/signin'/>
            :
    <section className="h-cover">
        <p style={{marginBottom:'3rem', textAlign:"center", textTransform:'capitalize', fontWeight:"bold"}}>Welcome {fullname} to weather forecast</p>
      <div className="weather">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img
            src={search_icon}
            alt="Search Icon"
            onClick={() => search(inputRef.current.value)}
          />
        </div>

        {weatherData ? (
          <>
            <img
              src={weatherData.icon}
              alt="Weather Image"
              className="weather-icon"
            />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>

            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="Image" />

                <div>
                  <p>{weatherData.humidity} %</p>
                  <strong>Humidity</strong>
                </div>
              </div>

              <div className="col">
                <img src={wind_icon} alt="Image" />

                <div>
                  <p>{weatherData.windSpeed}Km/h</p>
                  <strong>Wind Speed</strong>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

             <Link to="/userDashboard-page">
                   <button className="btn btn-primary mt-3" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Dashboard</button>
            </Link>
    </section>
  );
};

export default WeatherApp;
