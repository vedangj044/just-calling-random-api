import { useEffect, useState, useRef } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const GetIcon = () => {
   const [Icon, setIcon] = useState(false);
   const website = useRef();
   const [websiteUrl, setWebsiteUrl] = useState("youtube.com");

   useEffect(() => {
      axios
         .get("https://icon.horse/icon/" + websiteUrl)
         .then(res => {
            setIcon("https://icon.horse/icon/" + websiteUrl);
         })
         .catch(err => {
            setIcon(false);
            console.log("Some an error came :(");
         });
   }, [websiteUrl]);

   const submitHandler = event => {
      event.preventDefault();
      setWebsiteUrl(website.current.value);
   };

   return (
      <div className="">
         <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
            <h1 className="text-2xl font-medium pb-6">Website Icon API</h1>
            {Icon ? (
               <img src={Icon} style={{ width: "20%" }} alt="Nasa" />
            ) : (
               <h5 className="text-xl font-medium py-2 text-blue-700 italic">
                  Some an error came :(
               </h5>
            )}
            <input
               id="keyword"
               className="border px-2 p-1 focus:border-blue-600 outline-none border-blue-500 border-2 rounded ml-1"
               type="text"
               placeholder="The website's name"
               ref={website}
            />
            <button
               className="border p-1 border-blue-600 rounded ml-2 mb-2 bg-blue-200 hover:bg-blue-400"
               onClick={submitHandler}>
               Get Icon
            </button>

            <ContributorInfo
               username="avichal-neweradeveloper"
               profilePic="https://avatars.githubusercontent.com/avichal-neweradeveloper"
            />
            <ApiInfo apiUrl="https://api.nasa.gov/" apiName="Website Icon API" />
         </div>
      </div>
   );
};

export default GetIcon;
