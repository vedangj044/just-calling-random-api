import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomDadJoke(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setResponse(data.joke))
      .catch((err) => {
        console.log("error:", err);
      });
  }, []);

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Random Dad Joke API</h1>
      <h1 className="text-2xl font-medium pb-6">{response}</h1>

      <ContributorInfo
        username="savioxavier"
        profilePic="https://avatars.githubusercontent.com/u/38729705?v=4"
      />
      <ApiInfo
        apiUrl="https://icanhazdadjoke.com/api"
        apiName="icanhazdadjoke"
      />
    </div>
  );
}
