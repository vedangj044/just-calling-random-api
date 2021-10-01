import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomActivity(props) {
    const [response, setResponse] = useState("");

    useEffect(() => {
        fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400")
            .then((res) => res.json())
            .then((data) => setResponse(data.activity));
    }, []);

    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Random Activity</h1>
            <h1 className="text-2xl font-medium pb-6">{response}</h1>

            <ContributorInfo username="gabrifedi" profilePic="https://avatars.githubusercontent.com/u/40056345?v=4" />
            <ApiInfo apiUrl="https://api.sunrise-sunset.org" apiName="Sunrise Sunset"/>
        </div>
    );

}