import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';


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

    useEffect(() => {
  const script = document.createElement('script');
  script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js';
  document.body.appendChild(script);

  const widgetScript = document.createElement('script');

  if (data && data.city && data.city.id) {
    const cityId = data.city.id; // Get the city id from the data

    widgetScript.text = `
      window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
      window.myWidgetParam.push({
        id: 11,
        cityid: '${cityId}',
        appid: '0c81c7c50c860752a7511224e63ed763',
        units: 'metric',
        containerid: 'openweathermap-widget-11',
      });
      (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
      })();
    `;
  } else {
    // Handle the case where city id is not available
    console.error('City id not available in weather data');
  }

  document.body.appendChild(widgetScript);

  return () => {
    // Clean up the appended script when the component unmounts
    document.body.removeChild(script);
    document.body.removeChild(widgetScript);
  };
}, [data]);


  return (
    <div className="bg-cover h-full" style={{ 
      backgroundImage: `url("/images/weather-9.jpg")`, 
  }}>
    <div className='p-10 flex justify-center items-center h-full'>
      {/* <div className='m-auto flex flex-col w-44' id="openweathermap-widget-11"></div> */}
    </div>

    </div>
  )
};

export default WeatherResult;
