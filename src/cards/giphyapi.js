import { useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";
import axios from "axios";

const GiphyApi = () => {
  const key = process.env.REACT_APP_GIPHY_API_KEY;

  const [searchValue, setSearchValue] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchGiphyApi = (search) => {
    if (!search) {
      return;
    }
    setLoading(true);
    axios
      .get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`)
      .then((res) => {
        const { data } = res;
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="flex mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <div className="w-12/12">
          <h1 className="text-xl py-2">Giphy API</h1>
          <input
            id="keyword"
            className="border px-2 p-1 focus:border-blue-600 outline-none border-blue-500 border-2 rounded ml-1"
            type="text"
            placeholder="Type a GIF you want to see"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="border p-1 border-blue-600 rounded ml-2 mb-2 bg-blue-200 hover:bg-blue-400"
            onClick={() => fetchGiphyApi(searchValue)}
          >
            Search
          </button>
          <br />
          <div className="flex flex-wrap w-auto">
            {loading && (
              <h1 className="text-2xl font-medium pt-3 pb-3">Loading...</h1>
            )}
            {data &&
              data.data.slice(0, 5).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image.images.original.url}
                    className="h-1/5 w-1/5 pb-6"
                    alt=""
                  />
                );
              })}
          </div>
          <ContributorInfo
            username="dddqwerty"
            profilePic="https://avatars.githubusercontent.com/u/50979657?s=400&u=6263634b89881708c6367932dd99c1df3be6a89e&v=4"
          />
          <ApiInfo
            apiUrl="https://developers.giphy.com/docs/api/"
            apiName="Giphy API doc"
          />
        </div>
      </div>
    </div>
  );
};

export default GiphyApi;
