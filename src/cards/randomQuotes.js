import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomQuotes(props) {
    // React hooks are used here to call the inbuilt fetch api
    // and display the response in a component.
    // Contributor's have to use fetch api to call any public api 
    // and render the response to a component. Contributor's must
    // inlcude the ContributorInfo and ApiInfo component, with 
    // suitable props. Refer to README.md for details.

    const [response, setResponse] = useState("");

    useEffect(() => {

        fetch("https://api.quotable.io/random")
            .then(resp => resp.json())
            .then(data => setResponse(data.content))

    }, [])

    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Random Quotes API</h1>
            <h1 className="text-2xl font-medium pb-6">{response}</h1>

            <ContributorInfo username="vedangj044" profilePic="https://avatars.githubusercontent.com/u/43697446?v=4" />
            <ApiInfo apiUrl="https://github.com/lukePeavey/quotable" apiName="Quotable" />
        </div>
    );
}