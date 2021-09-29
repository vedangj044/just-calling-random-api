import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomAdvice(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch(https://swapi.dev/api/people/{Math.floor(Math.random() * 50)}?format=json´)
      .then((resp) => resp.json())
      .then((data) => setResponse(data.name));
  }, []);

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">The Star Wars API</h1>
      <h1 className="text-2xl font-medium pb-6">Random Star Wars character: {response}</h1>

      <ContributorInfo
        username="DiFronzo"
        profilePic="https://avatars.githubusercontent.com/u/47353498?v=4"
      />
      <ApiInfo apiUrl="https://swapi.dev/" apiName="SWAPI" />
    </div>
  );
}
