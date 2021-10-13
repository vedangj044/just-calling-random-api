import React, { useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const Dungeons = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    setLoading(true);
    axios
      .get(`https://www.dnd5eapi.co/api/spells/${searchValue}`)
      .then((res) => {
        const { data } = res;
        console.log(data);
        setResult(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Dungeons and Dragons</h1>
      <input
        className="border px-2 p-1 focus:border-blue-600 outline-none border-blue-500 border-2 rounded"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter spell (eg acid-arrow)..."
      />
      <button
        className="border p-1 border-blue-600 rounded ml-2 mb-2 w-20 bg-blue-200 hover:bg-blue-400"
        onClick={searchHandler}
      >
        Search
      </button>
      <br />
      <div className="flex flex-wrap w-auto flex-col">
        {loading && (
          <h1 className="text-2xl font-medium pt-3 pb-3">Loading...</h1>
        )}
        {result && (
          <>
            <div className="flex flex-wrap w-auto flex-row">
              <h1 className="text-2xl font-medium pb-6">Name : &nbsp;</h1>
              <h1 className="text-2xl font-small pb-6">{result.name}</h1>
            </div>
            <br />
            <div className="flex flex-wrap w-auto flex-row">
              <h1 className="text-2xl font-medium pb-6">Range : &nbsp;</h1>
              <h1 className="text-2xl font-small pb-6">{result.range}</h1>
            </div>
            <br />
            <div className="flex flex-wrap w-auto flex-row">
              <h1 className="text-2xl font-medium pb-6">Material : &nbsp;</h1>
              <h1 className="text-2xl font-small pb-6">{result.material}</h1>
            </div>
            <br />
            <div className="flex flex-wrap w-auto flex-row">
              <h1 className="text-2xl font-medium pb-6">Description : </h1>
              <h1 className="text-2xl font-small pb-6">{result.desc[0]}</h1>
            </div>
            <br />
            <div className="flex flex-wrap w-auto flex-row">
              <h1 className="text-2xl font-medium pb-6">Higher Level : </h1>
              <h1 className="text-2xl font-small pb-6">
                {result.higher_level[0]}
              </h1>
            </div>
            <br />
          </>
        )}
      </div>
      <ContributorInfo
        username="AmitrajitDas"
        profilePic="https://amitrajitdas.github.io/Portfolio-V2/assets/img/dp.jpg"
      />
      <ApiInfo apiUrl="http://www.dnd5eapi.co/" apiName="D&D 5e API" />
    </div>
  );
};

export default Dungeons;
