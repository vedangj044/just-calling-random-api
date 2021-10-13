import { useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomRoboFriend = () => {
  const [randomId, setRandomId] = useState(1);

  const DEFAULT_NAME = "Hijal";

  const generateRandomIdHandler = () => {
    let randomId = Math.floor(Math.random() * 100);
    setRandomId(randomId);
  };

  return (
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2">Random ROBO Friend</h1>
        <div className="block bcg-black"></div>
        <div className="block">
          <div className="container">
            <img
              src={`https://robohash.org/${randomId}`}
              alt="robots"
              className="user-img"
            />
            <p className="user-title">{DEFAULT_NAME}</p>

            <button
              className="btn border border-transparent text-sm font-medium rounded-md text-white bg-red-600 
         hover:bg-indigo-700"
              type="button"
              onClick={generateRandomIdHandler}
            >
              New Friend
            </button>
          </div>
        </div>

        <ContributorInfo
          username="hijal"
          profilePic="https://avatars.githubusercontent.com/u/21256564?s=400&u=216341a31b865af8e315abfeedda852fb3aef981&v=4"
        />
        <ApiInfo apiUrl="https://robohash.org/" apiName="Random Robot API" />
      </div>
    </div>
  );
};

export default RandomRoboFriend;
