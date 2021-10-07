import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function RandomActivity(props) {
    const [response, setResponse] = useState("");

    useEffect(() => {
        fetch("https://www.boredapi.com/api/activity")
            .then((res) => res.json())
            .then((data) => setResponse(data.activity));
    }, []);

    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
            <h1 className="text-xl py-2">Random Activity</h1>
            <h1 className="text-2xl font-medium pb-6">{response}</h1>

            <ContributorInfo username="mihirharshe" profilePic="https://avatars.githubusercontent.com/u/68854886?v=4" />
            <ApiInfo apiUrl="https://www.boredapi.com/" apiName="BoredAPI"/>
        </div>
    );

}