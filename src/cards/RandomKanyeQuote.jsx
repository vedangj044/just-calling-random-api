import React, { useState, useEffect } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomKanyeQuote(props) {
  const [kanyeQuote, setKanyeQuote] = useState("");

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((data) => setKanyeQuote(data.quote));
  }, []);
  return (
    <div>
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2">Random Kanye West Quotes</h1>
        <h1 className="text-2xl font-medium pb-6">{kanyeQuote}</h1>
        <ContributorInfo
          username="ANISH0309"
          profilePic="https://avatars.githubusercontent.com/ANISH0309"
        />
        <ApiInfo apiUrl="https://kanye.rest/" apiName="Kanye.rest" />
      </div>
    </div>
  );
}
