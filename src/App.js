import React, { useState, useEffect } from 'react';
import Widget from "./components/Widget"; 

const api_key = "166d00e26d3ff2c6149e89feccc5c59a"

function App() {
  // Set city state with default value "Copenhagen"
  const [query, setQuery] = useState("Copenhagen");
  
  const handleQuery = event => {
    setQuery(event.target.value)
  }

  // Set weather data state
  const [weatherData, setWeatherData] = useState({})

  // Get weather data from API
  async function getWeather() {
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query},dk&appid=${api_key}&units=metric`)
      .then((res) => res.json()
      .then((data) => {
        setWeatherData(data)
      })
      
      );
  };
  
  // Set component initial state -- on first render
  useEffect(() => {
    getWeather(query) 
    // eslint-disable-next-line 
  }, [])
  
  return ( 
    <div className="App">
      <Widget
        weatherData={weatherData}
        getWeather={getWeather}
        handleQuery={handleQuery}
      />
    </div>
  );      
}

export default App;
