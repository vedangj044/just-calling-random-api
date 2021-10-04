import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const NasaApi = () => {
   const [spaceData, setSpaceData] = useState("");

   useEffect(() => {
      axios
         .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
         .then(res => {
            setSpaceData(res.data);
         })
         .catch(err => {
            setSpaceData("Some error came :(");
         });
   }, []);

   return (
      <div className="">
         <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-2xl font-medium pb-6">NASA Space API</h1>
            <h5 className="text-xl font-medium py-2 text-blue-700 italic">{spaceData.title}</h5>
            <img src={spaceData.url} style={{ width: "20%" }} alt="Nasa"/>

            <ContributorInfo
               username="avichal-neweradeveloper"
               profilePic="https://avatars.githubusercontent.com/avichal-neweradeveloper"
            />
            <ApiInfo apiUrl="https://api.nasa.gov/" apiName="NASA Space api" />
         </div>
      </div>
   );
};

export default NasaApi;
