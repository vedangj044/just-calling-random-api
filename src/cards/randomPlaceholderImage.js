import { React, useState, useEffect } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomPlaceholderImage = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [url, setUrl] = useState("https://picsum.photos/200/300");

  useEffect(() => {}, [url]);

  const getImage = (e) => {
    e.preventDefault();
    let newUrl = `http://picsum.photos/${width}/${height}`;
    axios
      .get(newUrl)
      .then((response) => {
        setUrl(newUrl);
      })
      .catch((error) => {
        setUrl("https://picsum.photos/200/300");
      });
  };

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-2xl font-medium pb-6">
        Random placeholder image Api
      </h1>
      <img src={url} alt="Placeholder" />
      <div class="flex flex-wrap">
        <input
          type="text"
          className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  mt-4 mr-4"
          placeholder="Enter Height"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          value={height}
        />
        <input
          type="text"
          className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mt-4 mx-4"
          placeholder="Enter Width"
          onChange={(e) => {
            setWidth(e.target.value);
          }}
          value={width}
        />
        <button
          type="submit"
          className="rounded border bg-green-300 hover:bg-green-500 transform hover:scale-110 duration-500	 p-1 mt-4 mx-4"
          onClick={getImage}
        >
          Get random image
        </button>
      </div>
      <ContributorInfo
        username="try-catch-stack"
        profilePic="https://avatars.githubusercontent.com/try-catch-stack"
      />
      <ApiInfo apiInfo="https://picsum.photos/" apiName="Lorem Picsum" />
    </div>
  );
};

export default RandomPlaceholderImage;
