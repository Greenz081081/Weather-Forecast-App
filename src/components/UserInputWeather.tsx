import { useState, useEffect } from "react";
import Link from "next/link";

interface WeatherData {
    list: {
      weather: { description: string; icon: string }[];
      main: { temp: number; humidity: number };
    }[];
  }

  export default function App() {
    const [data, setData] = useState<WeatherData | null>(null);
    const [inputCity, setInputCity] = useState("");
  
    const fetchWeatherData = async () => {
      if (!inputCity) {
        console.error("Please enter a city name.");
        return;
      }
  
      const apiKey = "cb411365f163ce2a1a5d327896469c7f"; 
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}`;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: WeatherData = await response.json();
        setData(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };
  
    const handleFetchWeather = () => {
      fetchWeatherData();
    };
  return (
    <div className="bg-cover h-full" style={{ 
      backgroundImage: `url("/images/forecastbg.png")`, 
    }}>
      <div className="App p-1 w-auto mx-auto h-full">
        <section className="mt-8 p-1 w-3/6 mx-auto h-full ">
          <div className="h-full  max-w-lg my-20 mx-auto items-center p-10 rounded-md bg-white bg-opacity-20">
            <label className="ml-1">
              Location:
              <input className="w-full border rounded-sm p-2 mt-2" type="text" value={inputCity} onChange={(e) => setInputCity(e.target.value)} 
              placeholder="Enter Location to get weather data " /><br></br>
            </label>
            <button className="border rounded-sm mt-4 p-2 w-40 shadow-lg shadow-black
            hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-highlight" onClick={handleFetchWeather}>Search</button>
          </div>
          {data && (
            <div className="h-full border  max-w-lg my-20 mx-auto bg-white rounded-md text-center shadow-lg items-center p-10">
              {/* Display weather information */}
              <Link href={`/OneDayPage?city=${inputCity}`} passHref className="cursor-pointer mx-4 text-sm">
              Click here for a day&apos;s weather forecast results
              </Link><br />
              <Link href={`/ThreeDaysPage?city=${inputCity}`} passHref className="cursor-pointer mx-4 text-sm">
              Click here for hourly weather forecast results
              </Link><br />
              <Link href={`/MapPage?city=${inputCity}`} passHref className="cursor-pointer mx-4 text-sm">
              Click here for Maps
              </Link><br />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
