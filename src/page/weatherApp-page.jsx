import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import humidity_icon from "../assets/humidity.png"
import wind_icon from "../assets/wind.png"


const WeatherApp = ()=>{
    return(
        <section className="h-cover" >
            <div className="weather">
                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                    <img src={search_icon} alt="Search Icon"/>
                    
                </div>

                <img src={clear_icon} alt="clear Image" className="weather-icon"/>
                <p className="temperature">16°C</p>
                <p className="location">London</p>

                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt="Image"/>
                        
                        <div>
                                <p>91 %</p>
                                <span>Humidity</span>
                        </div>
                    </div>

                    <div className="col">
                        <img src={wind_icon} alt="Image"/>
                        
                        <div>
                                <p>3.6 Km/h</p>
                                <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}    
export default WeatherApp;