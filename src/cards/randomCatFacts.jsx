import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomCatFacts = () => {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    axios.get("https://meowfacts.herokuapp.com/").then((res) => {
      // console.log(res.data);
      setCatFact(res.data.data[0]);
    });
  }, []);
  // console.log(catFact);
  return (
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-red-700 font-bold">
          Random Cat Facts
        </h1>
        <h1 className="text-2xl font-medium pb-6">{catFact}</h1>

        <ContributorInfo
          username="STILLWATER"
          profilePic="https://avatars.githubusercontent.com/st1llwater"
        />
        <ApiInfo
          apiUrl="https://github.com/wh-iterabb-it/meowfacts"
          apiName="Meow-Facts"
        />
      </div>
    </div>
  );
};

export default RandomCatFacts;
