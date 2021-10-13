import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function StarWarsAPI(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch(
      `https://swapi.dev/api/people/${Math.floor(
        Math.random() * 50
      )}?format=json`
    )
      .then((resp) => resp.json())
      .then((data) => setResponse(data.name));
  }, []);

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">The Star Wars API</h1>
      <h1 className="text-2xl font-medium pb-6">
        Random Star Wars character: {response}
      </h1>

      <ContributorInfo
        username="DiFronzo"
        profilePic="https://storage.ko-fi.com/cdn/useruploads/d3dceedd-102c-4380-80e9-3a748287882c.png"
      />
      <ApiInfo apiUrl="https://swapi.dev/" apiName="SWAPI" />
    </div>
  );
}
