import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomBriyaniPics= () => {
  const [Pics, setPics] = useState("");
  useEffect(() => {
    axios.get("https://biriyani.anoram.com/get").then((res) => {
      setPics(res.data.image);
    });
  }, []);

  return(
    <div className="">
      <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
        <h1 className="text-xl py-2 text-blue-700 bold">
         Random Briyani Pics
        </h1>
         <img className="h-1/5 w-1/5 pb-6" src={Pics}/>
        <ContributorInfo
          username="Deepak_070"
          profilePic="https://avatars.githubusercontent.com/u/56753916?s=40&v=4"
        />
        <ApiInfo
          apiUrl="https://github.com/peopledrivemecrazy/biriyani-as-a-service"
          apiName="Briyani pics"
        />
      </div>
    </div>
  );
};

export default RandomBriyaniPics;
