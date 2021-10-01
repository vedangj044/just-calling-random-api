import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function BreadPuns(props) {
  // React hooks are used here to call the inbuilt fetch api
  // and display the response in a component.
  // Contributor's have to use fetch api to call any public api
  // and render the response to a component. Contributor's must
  // inlcude the ContributorInfo and ApiInfo component, with
  // suitable props. Refer to README.md for details.

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("https://my-bao-server.herokuapp.com/api/breadpuns")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setResponse(data);
      });
  }, []);

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Bread Puns API</h1>
      <h1 className="text-2xl font-medium pb-6">{response}</h1>

      <ContributorInfo
        username="ItzMeOwww"
        profilePic="https://avatars.githubusercontent.com/u/28824919?v=4"
      />
      <ApiInfo
        apiUrl="https://github.com/sophi-li/breadpun-api"
        apiName="breadpun-api"
      />
    </div>
  );
}
