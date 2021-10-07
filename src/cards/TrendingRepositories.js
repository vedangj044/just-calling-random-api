import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";
import axios from "axios";

const TrendingRepositories = () => {
  const [trendingRepos, setTrendingRepos] = useState([]);
  const [trendingReposJSX, setTrendingReposJSX] = useState([]);

  useEffect(() => {
    const getTrendingRepos = async () => {
      const { data } = await axios.get(
        "https://api.trending-github.com/github/repositories",
        {
          params: {
            // period can be daily, weekly or monthly
            period: "daily",
          },
        }
      );

      setTrendingRepos(data);
    };

    getTrendingRepos();
  }, []);

  const getTrendingReposJSX = () => {
    const trendingReposJSX = trendingRepos.map((repo) => (
      <div
        className="p-3 border-2 border-grey-300 md:px-2 m-1 rounded-md shadow-md md:flex md:max-w-md"
        key={repo.name}
      >
        <div className="grid md:grid-cols-12 w-full">
          <div className="p-3 bg-gray-50 col-span-9 w-full">
            <a
              className="text-lg font-bold hover:text-blue-600 cursor-pointer rounded-md break-words"
              href={repo.url}
            >
              {repo.author}/{repo.name}
            </a>

            <p className="text-base font-medium truncate">{repo.description}</p>
            <h4
              className="text-base font-bold"
              style={{ color: repo.langColor }}
            >
              {repo.language}
            </h4>
          </div>
          <div className="rounded-l-2xl text-right p-2 pl-3 col-span-3 block">
            <div className="inline-flex text-right p-0 w-full">
              <img
                className="rounded-full h-4 w-4"
                src="https://static.thenounproject.com/png/796300-200.png"
                alt="starts"
              />
              <h4 className="text-sm font-normal truncate"> {repo.stars}</h4>
            </div>
            <div className="inline-flex text-right p-0 w-full">
              <img
                className="rounded-full h-4 w-4"
                src="https://static.thenounproject.com/png/42854-200.png"
                alt="forks"
              />
              <h4 className="text-sm font-normal truncate">{repo.forks}</h4>
            </div>
          </div>
        </div>
      </div>
    ));

    setTrendingReposJSX(trendingReposJSX);
  };

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2 font-medium">Trending GitHub Repositories</h1>

      <br />

      {/* Added the show button for controlled API call */}
      {trendingReposJSX.length === 0 && (
        <button
          className="border p-1 border-green-600 rounded ml-2 mb-2 bg-green-200 hover:bg-green-400"
          onClick={getTrendingReposJSX}
        >
          Show Trending Repositories
        </button>
      )}
      {trendingReposJSX.length !== 0 && (
        <button
          className="border p-1 border-red-600 rounded ml-2 mb-2 bg-red-200 hover:bg-red-400"
          onClick={() => setTrendingReposJSX([])}
        >
          Close
        </button>
      )}

      <div className="grid md:grid-cols-3">
        {trendingReposJSX.length > 0 && trendingReposJSX}
      </div>

      <br />

      <ContributorInfo
        username="chincholikarsalil"
        profilePic="https://avatars.githubusercontent.com/u/31334826?v=4"
      />
      <ApiInfo
        apiUrl="https://docs.trending-github.com/"
        apiName="Trending GitHub Repositories"
      />
    </div>
  );
};

export default TrendingRepositories;
