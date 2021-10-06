import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";
import axios from "axios";
export default function RandomAnimfacts(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood/${
          Math.floor(Math.random() * 10) + 1
        }`
      )
      .then((response) => {
        setResponse(response.data.data.fact);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Random Anime Facts</h1>
      <h1 className="text-2xl font-medium pb-6">{response}</h1>

      <ContributorInfo
        username="dontech09"
        profilePic="https://avatars.githubusercontent.com/u/59858506?s=400&u=4465d25e8fa6f80d1a0afdb5ac80388b2d468483&v=4"
      />
      <ApiInfo
        apiUrl="https://chandan-02.github.io/anime-facts-rest-api/"
        apiName="anime-facts"
      />
    </div>
  );
}
