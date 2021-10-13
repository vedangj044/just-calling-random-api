import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const Poemist = () => {
  const [randomPoem, setrandomPoem] = useState("");
  useEffect(() => {
    axios.get("https://www.poemist.com/api/v1/randompoems").then((res) => {
      setrandomPoem(res.data.title);
    });
  }, []);
  return (
    <div className="">
      <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <h1 className="text-xl py-2 text-green-700 italic">Random Poems</h1>
        <h1 className="text-2xl font-medium pb-6">{randomPoem}</h1>

        <ContributorInfo
          username="shovna01"
          profilePic="https://avatars.githubusercontent.com/shovna01"
        />
        <ApiInfo
          apiUrl="https://www.programmableweb.com/api/poemist-rest-api-v10"
          apiName="Poemist"
        />
      </div>
    </div>
  );
};

export default Poemist;
