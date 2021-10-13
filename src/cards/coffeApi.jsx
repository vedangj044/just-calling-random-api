import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const CoffeApi = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("https://asli-fun-fact-api.herokuapp.com/")
      .then((res) => res.json())
      .then(({ data }) => {
        setResponse(data.fact);
        console.log(data.fact);
      });
  }, []);
  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Fun Fact API</h1>

      {response !== null ? (
        <div className="flex w-25 h-15 items-center justify-center shadow-sm">
          <h1 bold> {response}</h1>
        </div>
      ) : null}

      <ContributorInfo
        username="Badal-Jha"
        profilePic="https://avatars.githubusercontent.com/u/73827944?v=4"
      />
      <ApiInfo
        apiUrl="https://asli-fun-fact-api.herokuapp.com/"
        apiName="FunFactAPI"
      />
    </div>
  );
};

export default CoffeApi;
