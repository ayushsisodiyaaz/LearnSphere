import { useState } from "react";
import WeatherSearch from "./weathersearch";
import WeatherInfo from "./weatherinfo";
export default function Weather(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",    
    feelsLike: undefined,
    humidity: 20,
    temp: 295.2,
    tempMax: 295.2,
    tempMin: 295.2,
     weather: undefined,
    });

    let updateInfo = (result) => {
        setWeatherInfo(result); 
    }

    return(
        <div>
            <h2> Real-Time Weather</h2>
            
            <WeatherSearch updateInfo={updateInfo}/>
            <WeatherInfo info={weatherInfo}/>
            
        </div>
    )
}
