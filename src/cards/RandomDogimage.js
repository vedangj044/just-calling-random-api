import React, { useState, useEffect } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomDogimage(props) {
  const [dogImage, setdogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setdogImage(data.message));
  }, []);
  return (
    <div>
      <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
        <h1 className="text-xl py-2">Random Dog images</h1>
        <img className="h-1/5 w-1/5 pb-6" src={dogImage} alt="dogimage" />

        <ContributorInfo
          username="pranavvdesai"
          profilePic="https://avatars.githubusercontent.com/pranavvdesai"
        />
        <ApiInfo apiUrl="https://dog.ceo/dog-api/" apiName="Random Dog Pics" />
      </div>
    </div>
  );
}