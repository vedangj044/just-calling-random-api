import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomValorantWeapon = () => {
  const [weapon, setWeapon] = useState("");

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((res) => {
        const randomNumber = Math.floor(res.data.data.length * Math.random());
        setWeapon(res.data.data[randomNumber]);
      })
      .catch((err) => {
        setWeapon(false);
      });
  }, []);

  return (
    <div className="">
      <div className="mx-4 my-8 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-2xl font-medium pb-6">
          Random Valorant Weapon API
        </h1>
        {weapon && weapon.displayName ? (
          <h5 className="text-xl font-medium py-2 text-blue-700 italic">
            {weapon.displayName}
          </h5>
        ) : (
          <h5 className="text-xl font-medium py-2 text-blue-700 italic">
            No Weapon Found
          </h5>
        )}

        {weapon && weapon.displayIcon && (
          <img
            src={weapon.displayIcon}
            style={{ width: "20%" }}
            alt="Anime Series"
          />
        )}

        <ContributorInfo
          username="avichal-neweradeveloper"
          profilePic="https://avatars.githubusercontent.com/avichal-neweradeveloper"
        />
        <ApiInfo apiUrl="https://valorant-api.com/" apiName="Valorant api" />
      </div>
    </div>
  );
};

export default RandomValorantWeapon;
