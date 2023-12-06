import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface WeatherData {
  lat: number;
  lon: number;
  city: any;
  list: {
    weather: { description: string; icon: string }[];
    main: { temp: number; humidity: number };
  }[];
}

const WeatherResult = () => {
  const router = useRouter();
  const { city } = router.query;

  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number }>({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (typeof city === 'string') {

        // const apiKey = process.env.API_KEY
        const apiKey = 'cb411365f163ce2a1a5d327896469c7f';

        // Fetch weather data based on the user's location
        const userLocationUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;

        try {
          const userLocationResponse = await fetch(userLocationUrl);
          if (userLocationResponse.ok) {
            const userLocationResult: WeatherData = await userLocationResponse.json();
            setData(userLocationResult);
            console.log(userLocationResult)
            localStorage.setItem('savedCity', city);
            localStorage.setItem('savedData', JSON.stringify(userLocationResult));
          } else {
            throw new Error('Failed to fetch user location weather data');
          }
        } catch (error) {
          console.error('Error fetching user location weather data: ', error);
        }

        // Fetch weather data based on the provided city
        const cityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        try {
          const cityResponse = await fetch(cityUrl);
          if (cityResponse.ok) {
            const cityResult: WeatherData = await cityResponse.json();
            setData(cityResult);
            console.log(cityResult)
            localStorage.setItem('savedCity', city);
            localStorage.setItem('savedData', JSON.stringify(cityResult));
          } else {
            throw new Error('Failed to fetch city weather data');
          }
        } catch (error) {
          console.error('Error fetching city weather data: ', error);
        }
      }
    };

    fetchWeatherData();
  }, [city, location.lat, location.lon]);

  useEffect(() => {
    const savedCity = localStorage.getItem('savedCity');
    const savedData = localStorage.getItem('savedData');
    if (savedCity && savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="bg-cover h-full" style={{ 
        backgroundImage: `url("/images/weather-9.jpg")`, 
    }}>
        <div className='p-4 md:p-8'>
        <Image 
            src="/images/globe2.png"
            alt=""
            height={100}
            width={100}
            className=""/>
        <h1 className="font-extrabold text-white text-center">One Day Weather Forecast</h1>
        {/* Display the weather forecast data */}
        {data && data.list && data.list.length > 0 && (
            <div className='p-4 md:p-8 h-auto mt-16 mb-20 m-auto shadow-lg shadow-black md:w-64 border border-background text-background rounded-xl text-center bg-transparent'>
            <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
            {/* Display weather information as needed */}
            <p>Condition Description: {data.list[0].weather[0].description}</p>
            <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
            <p className="">Lat: {data.city.coord.lat}</p>
            <p>Lon: {data.city.coord.lon}</p>
            <div className='text-center'>
                <Image 
                src={`https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`} 
                alt={data.list[0].weather[0].description} 
                height={100}
                width={100}
                className="shadow-lg shadow-black rounded-full mt-8 ml-auto mr-auto border-b border-background"/>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default WeatherResult;
