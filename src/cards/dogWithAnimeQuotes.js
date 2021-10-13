import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";
import axios from "axios";

export const DogAnimeQuotes = (props) => {
  const [dogInfo, setDogInfo] = useState(null);
  const [animeQuotes, setAnimeQuotes] = useState("Im wise");

  useEffect(() => {
    console.log("mounting dog with anime quotes ....");
    fetchApi();
    // console.log(quote);
  }, []);

  const fetchApi = async () => {
    console.log("im supposed to fetch APIs");

    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log("dog image data -- ", response.data);
      setDogInfo(response.data.message);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.get(
        "https://animechan.vercel.app/api/random"
      );
      setAnimeQuotes(response.data.quote);
      console.log(response.data);
    } catch (err) {
      setAnimeQuotes("Look at me, so cute...");
      console.log("error fetching anime quotes ", err);
    }
  };

  return (
    <div className="mx-4 my-11 space-y-6 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-3xl py-2 font-bold">Famous Dog Quotes</h1>
      <div className="aspect-w-1 aspect-h-1">
        <img
          className="h-90 w-full px-60 object-cover relative right-3.5"
          src={dogInfo}
          alt="dog"
        />
      </div>
      <div>
        <p className="italic">Doggo ~ "{animeQuotes}"</p>
      </div>
      <div>
        <button
          className="bg-green-500 px-4 py-2 text-white rounded-md"
          onClick={fetchApi}
        >
          Get Another
        </button>
      </div>

      <ContributorInfo
        username="sugato1398"
        profilePic="https://avatars.githubusercontent.com/u/26281852?s=400&u=db14581108e63d7ad4280459ae98ba8ad67b2b0d&v=4"
      />
      <ApiInfo
        apiUrl="https://dog.ceo/api/breeds/image/random"
        apiName="Random Dog pics"
      />
      <ApiInfo
        apiUrl="https://animechan.vercel.app/api/random"
        apiName="Anime quotes"
      />
    </div>
  );
};
