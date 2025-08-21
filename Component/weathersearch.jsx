import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
export default function WeatherSearch({updateInfo}){

    const [city, setCity] = useState("Delhi");
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="93e503105c50715ae6c0ec8bc8dbfce0";

    const getWeatherInfo = async () => {
    //    const response = await fetch(`${API_URL}?q=${city}
    //     &appid=${API_KEY}`);
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

       const jsonResponse = await response.json();
       console.log(jsonResponse);
       const result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feelsLike,
        weather: jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
    }


   const hundleChange = (evt) =>{
    setCity(evt.target.value)
   }

   const hundleSubmit = async(evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("")
    const info = await getWeatherInfo();
    updateInfo(info)
   }
    return(
        <div>
            <form onSubmit={hundleSubmit}>
            <TextField id="City" 
            label="City name"
             variant="outlined" 
             required
             value={city}
             onChange={hundleChange}
              />
                <br></br><br></br>
                <Button variant="outlined" type="submit" endIcon={<SendIcon />}>
        Search
      </Button>

            </form>
        </div>
    )
}