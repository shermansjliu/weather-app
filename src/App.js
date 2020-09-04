import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import tw from 'twin.macro'
import Navbar from "./components/Navbar";
export default function App() {
  
  const [cityData, setcityData] = useState("");
  const [iconLink, setIconLink] = useState("http://openweathermap.org/img/wn/02d@2x.png")
  const [forecast, setForecast] = useState("")
  const [temperature, setTemperature] = useState("")
  
  async function fetchWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=607e75a15955b047dee2aa02c66f43a6`,
        { mode: "cors" }
      );
      const json = await response.json()
      
      updateWeather(json)
    } catch (error) {return false}
  }


  useEffect(() => {
  //  fetchWeather("Toronto")
  }, []);

  function updateWeather(data) {
    
    if (!data) {
      return
    }
    console.log(data)
    // console.log(data['weather'][0]['icon'])
    const {
      weather:[condition] ,
      
      main: {temp: tempK},
      name,
      main: {humidity},
    } = data;

    console.log(tempK)
    const icon = condition['icon']
    const forecast = condition['main']
    setForecast(forecast)
    setIconLink(`http://openweathermap.org/img/wn/${icon}@2x.png`)
    setTemperature(Math.floor(tempK-273))

  }
 const Forecast = tw.p`text-xl text-gray-600 font-bold`
  const Card = tw.div`rounded shadow max-w-sm py-3 px-3 flex flex-col items-center`
  const Icon= tw.img`object-contain w-40 h-32`
  const Temperature = tw.p`text-3xl text-gray-600`
  return (
    <div>
      <Navbar fetchWeather={fetchWeather} />
      <Container className="py-3">
        <div className="flex flex-row justify-center">
        <Card>
            <Forecast>{forecast}</Forecast>
            <Icon src={iconLink} alt="Weather Pic"/>
            <Temperature>{temperature}°C</Temperature>
          
        </Card>
        </div>
      
      </Container>
    </div>
  );
}
