import React, { useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RicknmortyApi = () => {
  const [character, setCharacter] = useState("");

  let getChar = () => {
    let random = Math.floor(Math.random() * 20);
    let pg = Math.floor(Math.random() * 34);

    fetch(`https://rickandmortyapi.com/api/character/?page=${pg}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.results[random]);
      })
      .catch((err) => console.log(err));
  };
  let lc = { ...character.location };
  return (
    <>
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2">Rick and Morty API</h1>
        <button
          className="border p-1 border-green-600 rounded ml-2 mb-2 w-20 hover:bg-green-300"
          onClick={getChar}
        >
          Generate
        </button>
        <section className="flex flex-col md:flex-row pt-2 pb-2">
          <img
            className="sm:m-auto md:m-0"
            src={character.image}
            height="120"
            width="120"
            alt={character.name}
          />
          <div className="mx-4">
            <h2 className="text-2xl font-medium pb-6">{character.name}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <li className="bg-green-200 px-2 py-1 text-center rounded-full">
                {character.status}
              </li>
              <li className="bg-green-200 px-2 py-1 text-center rounded-full">
                {character.species}
              </li>
              <li className="bg-green-200 px-2 py-1 text-center rounded-full">
                {lc.name}
              </li>
            </ul>
          </div>
        </section>

        <ContributorInfo
          username="SobhanDash"
          profilePic="https://avatars.githubusercontent.com/SobhanDash"
        />
        <ApiInfo
          apiUrl="https://rickandmortyapi.com"
          apiName="Rick and Morty Api"
        />
      </div>
    </>
  );
};

export default RicknmortyApi;
