import React, { useState, useEffect } from "react";
import ApiInfo from "../components/apiInfo";
import ContributorInfo from "../components/contributorInfo";

const QuoteClearAPI = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://quoteclear.web.app/api/random")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setQuote(data.text);
      });
  }, []);
  // console.log(quote)
  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Quote Clear API</h1>
      <h1 className="text-xl font-medium pb-6">{quote}</h1>

      <ContributorInfo
        username="vishalkr058"
        profilePic="https://avatars.githubusercontent.com/u/22008102?v=4"
      />
      <ApiInfo
        apiUrl="https://quoteclear.web.app/api/random"
        apiName="quoteclear"
      />
    </div>
  );
};

export default QuoteClearAPI;
