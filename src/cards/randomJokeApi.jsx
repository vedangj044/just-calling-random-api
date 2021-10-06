import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomJokeApi = () => {
  const [joke, setjoke] = useState("");
  const [delivery, setDelivery] = useState("");

  useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous").then((res) => {

      setjoke(res.data.setup);
      setDelivery(res.data.delivery);
    });
  }, []);

  return(
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-black Bold">
         Random Joke API
        </h1>
        <h1 className="text-2xl font-medium pb-6">{joke}</h1>
        <h1 className="text-2xl font-medium pb-6">{delivery}</h1>

        <ContributorInfo
          username="yash37158"
          profilePic="https://user-images.githubusercontent.com/68152307/135753907-27d2c8a9-f02a-4aab-8e3f-439f35c5765e.png"
        />
        <ApiInfo
          apiUrl="https://sv443.net/jokeapi/v2/"
          apiName="Random Joke"
        />
      </div>
    </div>
  );
};

export default RandomJokeApi;
