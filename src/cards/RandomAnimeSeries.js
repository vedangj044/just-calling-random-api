import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomAnimeSeries = () => {
   const [anime, setAnime] = useState("");

   useEffect(() => {
      axios
         .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
         .then(res => {
            const randomNumber = Math.floor(res.data.data.length * Math.random());
            setAnime(res.data.data[randomNumber]);
         })
         .catch(err => {
            setAnime(false);
         });
   }, []);

   return (
      <div className="">
         <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-2xl font-medium pb-6">Random Anime Series API</h1>
            {setAnime ? (
               <h5 className="text-xl font-medium py-2 text-blue-700 italic">{anime.anime_name}</h5>
            ) : (
               <h5 className="text-xl font-medium py-2 text-blue-700 italic">
                  No Anime Series found
               </h5>
            )}

            {setAnime && <img src={anime.anime_img} style={{ width: "20%" }} alt="Anime Series" />}

            <ContributorInfo
               username="avichal-neweradeveloper"
               profilePic="https://avatars.githubusercontent.com/avichal-neweradeveloper"
            />
            <ApiInfo
               apiUrl="https://chandan-02.github.io/anime-facts-rest-api/"
               apiName="Anime Series api"
            />
         </div>
      </div>
   );
};

export default RandomAnimeSeries;
