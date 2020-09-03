import React, { useState, useEffect } from "react";

export default function App() {
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=London&appid=607e75a15955b047dee2aa02c66f43a6",
          { mode: "cors" }
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {}
    }
    fetchData();
  }, []);
console.log(temperature);
  return (
    <>
      <nav></nav>
      
    </>
  );
}
