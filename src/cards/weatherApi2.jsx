import React, { useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const WeatherApi2 = () => {
    const[cityName, setCityName] = useState("")

    const [showResults, setShowResults] = useState(false)
    const [showError, setShowError] = useState(false)
    const[temp, setTemp] = useState("")
    const[weather, setWeather] = useState("")
    
    const getCityName = (e) => {
        setCityName(e.target.value)
        setShowResults(false)
        setShowError(false)
    }
    
    const apiKey = process.env.REACT_APP_WEATHER_API2_KEY;
    const unit = 'metric'
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+unit+"&appid="+apiKey
    const  getTemperature =async() => {
    let dataFound = false
         
        await fetch(
          url
        )
          .then((res) => {
              if(res.status === 200){
                return res.json()
              }else{
                return {main:{temp: "NOT FOUND"}, weather:[{description:"NOT FOUND"}]}
              }
        })
          .then((data) => {
            if(data.main.temp!=="NOT FOUND"){
                setTemp(data.main.temp)
                setWeather(data.weather[0].description)
                dataFound = true
            }
          });
          if(dataFound){
            setShowResults(true)
            
          }else{
            setShowError(true)
          }
      }
    
    const Results = () => (
        <>
            
            <h1 className="text-l py-2 text-red-700 font-bold"> The temperature in {cityName.charAt(0).toUpperCase() + cityName.slice(1)} is <span className="text-blue-700">{temp}°</span> celsius and the weather is <span className="text-blue-700">{weather}</span></h1>
            
        </>
        
      )
      const Error= ()=>(
          <>
            <h1 className="text-l py-2 text-red-600 font-bold"> The weather for the provided location couldn't be found</h1>
          </>
      )
    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
          <h1 className="text-xl py-2 text-red-700 font-bold">Weather By City Name API</h1>
          <br />
          
          <input type="text" placeholder="Enter city name" onChange={getCityName} value={cityName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          <br />
          <br />
          
          <button onClick={getTemperature} className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Weather</button>
          <br />
          <br />
          { showResults ? <Results /> : null }
          {showError ? <Error /> : null}
          <ContributorInfo
          username={"mayankd07"}
          profilePic={"https://avatars.githubusercontent.com/mayankd07"}
        />
        <ApiInfo
          apiUrl={"https://openweathermap.org/api"}
          apiName={"openweathermap Api"}
        />
        </div>
      )
}

export default WeatherApi2
