import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface WeatherData {
  lat: number;
  lon: number;
  // city: string;

  city: any;

  list: {
    weather: { description: string; icon: string }[];
    main: { temp: number; humidity: number };
    dt_txt: string;
  }[];

  current: {
    humidity: number;
    name: string;
  }

  daily: {
    feels_like: { night: number; sunrise: number };
    temp: { eve: number; night: number};
    weather: { description: string; icon: string}[];
  }[];
}

const ThreeDaysWeatherResult = () => {
  const router = useRouter();
  const { city } = router.query;
  const cityName = typeof city === 'string' ? city : '';

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
    const fetchWeatherData = async (url: string) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result: WeatherData = await response.json();
          setData(result);
          console.log("ThreeDays:", result);
          localStorage.setItem('savedCity', cityName);
          localStorage.setItem('savedData', JSON.stringify(result));
        } else {
          throw new Error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data: ', error);
      }
    };

    const fetchData = async () => {
      if (cityName) {

        // const apiKey = process.env.API_KEY
        const apiKey = 'cb411365f163ce2a1a5d327896469c7f';

        const userLocationUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
        await fetchWeatherData(userLocationUrl);

        const cityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
        await fetchWeatherData(cityUrl);
      }
    };

    fetchData();
  }, [cityName, location.lat, location.lon]);

  useEffect(() => {
    const savedCity = localStorage.getItem('savedCity');
    const savedData = localStorage.getItem('savedData');
    if (savedCity && savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="bg-cover h-full" style={{ 
      backgroundImage: `url("/images/weather-5.jpg")`, 
    }}>
      <div className='grid grid-cols-7 gap-2 m-auto p-4 w-full'>
      <Image 
        src="/images/globe2.png"
        alt=""
        height={100}
        width={100}
        className=""/>
        <h1 className="font-extrabold text-center mt-10 text-background col-start-3 col-end-6">Hourly Weather Forecast</h1>
        <p className="text-center font-light mt-16 text-background col-start-3 col-end-6">
        This page displays hourly forecast for each three hours interval of the day
        </p>
        <div className="col-start-1 col-end-2 p-3 h-auto font-thin mt-40 mb-20 shadow-lg bg-transparent border border-white text-background shadow-black rounded-xl w-48 text-center">
          {data && data.list && data.list.length > 0 &&(
            <div>
                <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
                <p>Date: {data.list[0].dt_txt}</p>
                <p>Clouds: {data.list[0].weather[0].description}</p>
                <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
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
          <div className="col-start-2 col-end-3 p-3 h-auto font-thin mt-40 mb-20 shadow-lg bg-transparent border border-white text-background shadow-black rounded-xl ml-8 w-48 text-center">
          {data && data.list && data.list.length > 0 &&(
            <div>
                <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
                <p>Date: {data.list[1].dt_txt}</p>
                <p>Clouds: {data.list[1].weather[0].description}</p>
                <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
                <div className='text-center'>
                <Image 
                src={`https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`} 
                alt={data.list[1].weather[0].description} 
                height={100}
                width={100}
                className="shadow-lg shadow-black rounded-full mt-8 ml-auto mr-auto border-b border-background"/>
            </div>
            </div>
          )} 
          </div>
          <div className="col-start-3 col-end-4 p-3 h-auto mt-40 font-thin mb-20 shadow-lg bg-transparent border border-white text-background shadow-black w-48 ml-16 rounded-xl text-center">
          {data && data.list && data.list.length > 0 &&(
            <div>
                <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
                <p>Date: {data.list[2].dt_txt}</p>
                <p>Clouds: {data.list[2].weather[0].description}</p>
                <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
                <div className='text-center'>
                <Image 
                src={`https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`} 
                alt={data.list[2].weather[0].description} 
                height={100}
                width={100}
                className="shadow-lg shadow-black rounded-full mt-8 ml-auto mr-auto border-b border-background"/>
            </div>
            </div>
          )} 
          </div>
          <div className="col-start-4 col-end-5 p-3 h-auto mt-40 font-thin mb-20 shadow-lg bg-transparent border border-white text-background shadow-black w-48 ml-24 rounded-xl text-center">
          {data && data.list && data.list.length > 0 &&(
            <div>
                <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
                <p>Date: {data.list[3].dt_txt}</p>
                <p>Clouds: {data.list[3].weather[0].description}</p>
                <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
                <div className='text-center'>
                <Image 
                src={`https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`} 
                alt={data.list[3].weather[0].description} 
                height={100}
                width={100}
                className="shadow-lg shadow-black rounded-full mt-8 ml-auto mr-auto border-b border-background"/>
            </div>
            </div>
          )} 
          </div>
          <div className="col-start-5 col-end-6 p-3 h-auto mt-40 font-thin mb-20 shadow-lg bg-transparent border border-white text-background shadow-black w-48 ml-32 rounded-xl text-center">
          {data && data.list && data.list.length > 0 &&(
            <div>
                <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
                <p>Date: {data.list[4].dt_txt}</p>
                <p>Clouds: {data.list[4].weather[0].description}</p>
                <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
                <div className='text-center'>
                <Image 
                src={`https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`} 
                alt={data.list[4].weather[0].description} 
                height={100}
                width={100}
                className="shadow-lg shadow-black rounded-full mt-8 ml-auto mr-auto border-b border-background"/>
            </div>
            </div>
          )} 
          </div>
          <div className="col-start-6 col-end-7 p-3 h-auto mt-40 font-thin mb-20 shadow-lg bg-transparent border border-white text-background shadow-black w-48 ml-40 rounded-xl text-center">
          {data && data.list && data.list.length > 0 &&(
            <div>
                <h1>Weather Forecast for <strong>{data.city.name}</strong></h1>
                <p>Date: {data.list[5].dt_txt}</p>
                <p>Clouds: {data.list[5].weather[0].description}</p>
                <p>Temperature: {data.list[0].main.temp.toFixed(1)}°F</p>
                <div className='text-center'>
                <Image 
                src={`https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`} 
                alt={data.list[5].weather[0].description} 
                height={100}
                width={100}
                className="shadow-lg shadow-black rounded-full mt-8 ml-auto mr-auto border-b border-background"/>
            </div>
            </div>
          )} 
          </div>
      </div>
    </div>
  );
};

export default ThreeDaysWeatherResult;