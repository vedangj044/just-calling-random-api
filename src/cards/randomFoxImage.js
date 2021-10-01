import { useEffect, useState } from "react";

import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";
import axios from "axios";

const BASE_URL = "https://randomfox.ca/floof/";

const RandomFoxImage = () => {
  const [data, setData] = useState({ image: "", link: "" });
  const fetchData = async () => {
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setData(response?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Random Fox Image</h1>
      <img className="h-1/5 w-1/5 pb-6" src={data?.image} alt="foximage" />

      <ContributorInfo
        username="akimabs"
        profilePic="https://avatars.githubusercontent.com/u/46390089?v=4"
      />
      <ApiInfo apiUrl="https://randomfox.ca/floof/" apiName="random-fox" />
    </div>
  );
};

export default RandomFoxImage;
