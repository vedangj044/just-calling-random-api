import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomGotQuotes(props) {
    const [response, setResponse] = useState("");
  
    useEffect(() => {

        fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
            .then(resp => resp.json())
            .then(data => setResponse(data.sentence))

    }, [])
    return (
      <div>
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2 text-yellow-700 font-bold">Game Of Thrones Quotes</h1>
            <h1 className="text-2xl font-medium pb-6">{response}</h1>
  
          <ContributorInfo
            
          />
          <ApiInfo apiUrl="https://game-of-thrones-quotes.herokuapp.com/v1/random" apiName="Random GOT Quotes" />
        </div>
        </div>
    );
}