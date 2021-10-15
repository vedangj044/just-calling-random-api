import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const SpacexCrew = () => {
  const [Crew, setCrew] = useState("");
  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/crew/").then((res) => {
      setCrew(res.data[Math.floor(res.data.length * Math.random())]);
    });
  }, []);

  return (
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-black Bold">Spacex Crew Members</h1>
        <img src={Crew.image} style={{ width: "20%" }} alt="Spacex Crew" />
        <h1 className="text-2xl font-medium pb-6">Crew Member : {Crew.name}</h1>
        <h2 className="text-2x; font-medium pb-6">
          Agency name: {Crew.agency}
        </h2>

        <ContributorInfo
          username="yash37158"
          profilePic="https://user-images.githubusercontent.com/68152307/135753907-27d2c8a9-f02a-4aab-8e3f-439f35c5765e.png"
        />
        <ApiInfo
          apiUrl="https://api.spacexdata.com/v4/crew"
          apiName="SpaceX Data API"
        />
      </div>
    </div>
  );
};

export default SpacexCrew;
