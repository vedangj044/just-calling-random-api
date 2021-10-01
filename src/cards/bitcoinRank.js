import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function bitcoinRank(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/btc-bitcoin", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setResponse(data.rank));
  }, []);

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">coinpaprika API</h1>
      <h1 className="text-2xl font-medium pb-6">
        Current rank of bitcoin is : {response}
      </h1>

      <ContributorInfo
        username="anirudh09041"
        profilePic="https://avatars.githubusercontent.com/anirudh09041"
      />
      <ApiInfo apiUrl="https://api.coinpaprika.com/v1/" apiName="coinpaprika" />
    </div>
  );
}
