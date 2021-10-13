import React, { useState, useEffect } from "react";
import ApiInfo from "../components/apiInfo";
import ContributorInfo from "../components/contributorInfo";

function PublicApi() {
  let [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then(({ entries }) => {
        let random = Math.floor(Math.random() * 100);
        // console.log(entries[random])
        setResponse(entries[random]);
      });
  }, []);

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Random Public API</h1>
      {response !== null ? (
        <>
          <a
            href={response.Link}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-medium pb-6"
          >
            {response.API}
          </a>
          <h1 className="text-xl pb-6">{response.Description}</h1>
        </>
      ) : (
        <h1 className="text-2xl font-medium pb-6">Loading</h1>
      )}

      <ContributorInfo
        username="AniketAgarwal21"
        profilePic="https://avatars.githubusercontent.com/u/69319004?v=4"
      />
      <ApiInfo apiUrl="https://api.imgflip.com/get_memes" apiName="MemesAPI" />
    </div>
  );
}

export default PublicApi;
