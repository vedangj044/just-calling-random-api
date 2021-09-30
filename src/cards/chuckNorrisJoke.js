import React, {useState, useEffect} from 'react';
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function ChuckNorrisJoke() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((data) => setResponse(data.value));
  }, []);

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Random Chuck Norris Joke API</h1>
      <h1 className="text-2xl font-medium pb-6">{response}</h1>

      <ContributorInfo
        username="kruzezab"
        profilePic="https://avatars.githubusercontent.com/u/60575709?v=4"
      />
      <ApiInfo apiUrl="https://api.chucknorris.io/" apiName="chucknorris.io" />
    </div>
  );
}
