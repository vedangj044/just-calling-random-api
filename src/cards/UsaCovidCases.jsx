import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const CovidUsaCases = () => {
  const [Cases, setCases] = useState("");
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries/usa").then((res) => {

      setCases(res.data.cases);
    });
  }, []);

  return(
    <div className="">
      <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
        <h1 className="text-xl py-2 text-black Bold">
         Covid Usa Cases
        </h1>
        <h1 className="text-2xl font-medium pb-6"> USA Covid Cases: {Cases}</h1>
        

        <ContributorInfo
          username="Yash Sharma"
          profilePic="https://user-images.githubusercontent.com/68152307/135753907-27d2c8a9-f02a-4aab-8e3f-439f35c5765e.png"
        />
        <ApiInfo
          apiUrl="https://disease.sh/v3/covid-19/countries/usa"
          apiName="Covid-usa-cases-API"
        />
      </div>
    </div>
  );
};

export default CovidUsaCases;