import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomGeekJokes = () => {
  const [geekJoke, setgeekJoke] = useState("");
  useEffect(() => {
    axios
      .get("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((res) => {
        // console.log(res.data);
        setgeekJoke(res.data.joke);
      });
  }, []);
  // console.log(geekJoke);
  return (
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-green-700 italic">
          Random Geek Jokes
        </h1>
        <h1 className="text-2xl font-medium pb-6">{geekJoke}</h1>

        <ContributorInfo
          username="SamyakJain2020"
          profilePic="https://avatars.githubusercontent.com/samyakjain2020"
        />
        <ApiInfo
          apiUrl="https://github.com/sameerkumar18/geek-joke-api"
          apiName="Geek Jokes"
        />
      </div>
    </div>
  );
};

export default RandomGeekJokes;
