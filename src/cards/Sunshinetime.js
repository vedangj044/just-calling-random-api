import React, { useState, useEffect } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function Sunshinetime(props) {
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);
  const [latlng, setLatlng] = useState("0.0");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today&v=${latlng}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if ("results" in data) {
          setSunrise(data.results.sunrise);
          setSunset(data.results.sunset);
        }
      })
      .catch((err) => {
        console.log("SHibe" + err);
      });
  }, [latlng, lat, lng]);
  return (
    <div>
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2">Sun shines</h1>

        <label htmlFor="lat">
          <span className="inline-block w-32">Latitude: </span>
          <input
            className="border border-1 rounded bg-gray-100 p-2"
            id="lat"
            type="number"
            value={lat}
            onChange={(e) => {
              setLat(e.target.value);
            }}
          />
        </label>
        <br />

        <label htmlFor="lng">
          <span className="inline-block w-32">Longitude: </span>
          <input
            className="border border-1 rounded bg-gray-100 p-2"
            id="lng"
            type="number"
            value={lng}
            onChange={(e) => {
              setLng(e.target.value);
            }}
          />
        </label>
        <br />

        <button
          className="text-white bg-blue-500 rounded-md p-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={() => {
            setLatlng(`${lat}-${lng}`);
          }}
        >
          Check now
        </button>

        <p>The Sun rises at: {sunrise}</p>
        <p>The Sun sets at: {sunset}</p>

        <ContributorInfo
          username="ok524"
          profilePic="https://avatars.githubusercontent.com/ok524"
        />
        <ApiInfo
          apiUrl="https://sunrise-sunset.org/api"
          apiName="Sunset and sunrise times API"
        />
      </div>
    </div>
  );
}
