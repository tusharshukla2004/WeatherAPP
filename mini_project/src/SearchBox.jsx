import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({ updateInfo }){
    let [city,setCity] = useState("");
   // let [error,setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "84df6d7e60bda24806637e393b7f6ca1";

    let getWeatherInfo = async () => {
        
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jasonResponse = await response.json();
        console.log(jasonResponse);
        let result = {
            city:city,
            temp: jasonResponse.main.temp,
             tempMin:jasonResponse.main.temp_min,
              tempMax: jasonResponse.main.temp_max,
               humidity: jasonResponse.main.humidity,
                feelsalike: jasonResponse.main.feelsalike,
                weather: jasonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    
    };

    let handleChange = (event)=>
    {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
    
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        
    }; 

    return (
        <div className="SearchBox">
             
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City-Name" variant="outlined"  value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
};