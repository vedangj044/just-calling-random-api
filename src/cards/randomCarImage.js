import { useEffect, useState } from "react";

import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";
import axios from "axios";

const BASE_URL = "https://forza-api.tk/";

const RandomCarImage = () => {
    const [data, setData] = useState({ image: "" });
    const fetchData = async () => {
        const response = await axios.get(BASE_URL);
        if (response.status !== 200) {
            throw new Error("Fetching err");
        }
        setData(response?.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
            <h1 className="text-xl py-2">Random Car Image</h1>
            <img className="h-1/5 w-1/5 pb-6" src={data?.image} alt="foximage" />

            <ContributorInfo
                username="euhidaman"
                profilePic="https://avatars.githubusercontent.com/u/65843257?v=4"
            />
            <ApiInfo apiUrl="https://forza-api.tk/" apiName="forza-api" />
        </div>
    );
};

export default RandomCarImage;
