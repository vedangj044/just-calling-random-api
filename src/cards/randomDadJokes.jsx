import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomDadJokes = () => {
  const [dadJoke, setdadJoke] = useState("");
  useEffect(() => {
    axios.get("https://dadjokes.io/").then((res) => {
    // axios.get("https://rapidapi.com/KegenGuyll/api/dad-jokes/details").then((res) => {
      // console.log(res.data);
      setdadJoke(res.data.joke);
    });
  }, []);
  // console.log(dadJoke);
  return(
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-green-700 italic">
         Random Dad Jokes
        </h1>
        <h1 className="text-2xl font-medium pb-6">{dadJoke}</h1>

        <ContributorInfo
          username="SairamNomula"
          profilePic="https://avatars.githubusercontent.com/SairamNomula"
        />
        <ApiInfo
          apiUrl="https://dad-jokes.p.rapidapi.com/random/joke"
          apiName="Dad Jokes"
        />
      </div>
    </div>
  );
};

export default RandomDadJokes;