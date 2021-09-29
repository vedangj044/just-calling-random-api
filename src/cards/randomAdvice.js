import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomAdvice(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((data) => setResponse(data.slip.advice));
  }, []);

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Random Advice API</h1>
      <h1 className="text-2xl font-medium pb-6">{response}</h1>

      <ContributorInfo
        username="ashutoshkrris"
        profilePic="https://avatars.githubusercontent.com/u/47353498?v=4"
      />
      <ApiInfo apiUrl="https://api.adviceslip.com/" apiName="Advice Slip" />
    </div>
  );
}
