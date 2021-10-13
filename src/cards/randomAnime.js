import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomAnime = () => {
  const [anime, setAnime] = useState({});
  useEffect(() => {
    axios.get("https://animechan.vercel.app/api/random/").then((res) => {
      //   console.log(res.data)
      setAnime(res.data);
    });
  }, []);
  return (
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-purple-700 font-bold">
          Random Anime Quotes
        </h1>
        <h1 className="text-2xl font-medium pb-4">{anime.quote}</h1>
        <p className="text-blue-600 font-semibold">- {anime.character}</p>
        <p className="text-red-600">in {anime.anime}</p>

        <ContributorInfo
          username="apoorvcodes"
          profilePic="https://avatars.githubusercontent.com/u/75479355?s=400&u=2b406b118766febb2515a268559e7d3fb9529ace&v=4"
        />
        <ApiInfo
          apiUrl="https://github.com/rocktimsaikia/anime-chan"
          apiName="Anime-chan"
        />
      </div>
    </div>
  );
};

export default RandomAnime;
