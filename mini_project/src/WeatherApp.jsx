import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp()
{
    let [weatherInfo, setWeatherInfo] = useState({
        city:"PrayagRaj",
        feelslike:24.84,
        temp:25.85,
        tempMin:25.43,
        tempMax:34.55,
        humidity:42,
        weather:"haze",
    });

let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
}

    return (
        <div style={{textAlign: "center"}}>
            <h2>weather app by delta</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
};