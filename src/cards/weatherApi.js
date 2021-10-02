import React from "react";
import { useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

function WeatherApi() {
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=a1089418425d486c9a0185247210908&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  return (
    <div>
      <div className="App">
        <h1 className="border-2 border-blue-900 m-4 text-3xl">Weather Card </h1>

        <input
          className="border-2 border-blue-300 "
          type="text"
          value={place}
          placeholder="delhi"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <button
          className="m-4 border-2 border-red-500"
          onClick={updatePlaceData}
        >
          search
        </button>
        <div className="card bg-black absolute left-1/4 m-4 border-2 border-blue-300 items-center border-2 border-blue-300  w-1/2 justify-center text-white ">
          {placeData.location ? (
            <>
              <img src={placeData.current.condition.icon} alt="img" />
              <div className="temp text-4xl relative space-x-8 > *">
                {placeData.current.temp_c}°
              </div>
              <div className="cityName text-2xl">
                {placeData.location.name}{" "}
              </div>
              <div className="container border-2 border-blue-300 ">
                <div className="row flex justify-around flex-wrap">
                  <div className="col text-m">
                    Wind Now{" "}
                    <div className="data">
                      {placeData.current.wind_kph} <span>Km/hr</span>{" "}
                    </div>
                  </div>

                  <div className="col">
                    Humidity{" "}
                    <div className="data">
                      {placeData.current.humidity} <span>%</span>
                    </div>
                  </div>

                  <div className="col">
                    Precipitation{" "}
                    <div className="data">
                      {placeData.current.precip_in} <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h5>Not Found!</h5>
          )}
        </div>
        <ContributorInfo
          username={"N-Deepika"}
          profilePic={"https://avatars.githubusercontent.com/n-deepika"}
        />
        <ApiInfo
          apiUrl={"`https://api.weatherapi.com/"}
          apiName={"weather-Api"}
        />
      </div>
    </div>
  );
}

export default WeatherApi;
