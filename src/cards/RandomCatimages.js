import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomCatimages(props) {
    const [catImage, setcatImage] = useState("");
  
    useEffect(() => {
      fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => setcatImage(data.file))
        .catch(err => {
          console.log("error:", err)
      });
    }, []);
    return (
      <div>
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
          <h1 className="text-xl py-2">Random Cat images</h1>
          <img className="h-1/5 w-1/5 pb-6" src={catImage} alt="catimage" />
  
          <ContributorInfo
            username="raghavi101"
            profilePic="https://avatars.githubusercontent.com/raghavi101"
          />
          <ApiInfo apiUrl="https://aws.random.cat/meow" apiName="Random Cat Pics" />
        </div>
        </div>
    );
}