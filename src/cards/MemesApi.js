import React, { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function MemesApi(props) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then(({data}) => {
                let random = Math.ceil(Math.random() * 100)
                setResponse(data.memes[random])
                // console.log(data.memes[random])
            });
    }, []);

    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Memes API</h1>
            {
                (response !== null) ? <h1 className="text-2xl font-medium pb-6">{response.name}</h1>
                                    : <h1 className="text-2xl font-medium pb-6">Loading</h1>
            }
            
            {
<<<<<<< HEAD
                (response !== null) ? <img width="400px" src={response.url} alt="meme" />
=======
                (response !== null) ? <img width="400px" src={response.url} alt="" />
>>>>>>> upstream/main
                                    : null
            }

            <ContributorInfo username="AniketAgarwal21" profilePic="https://avatars.githubusercontent.com/u/69319004?v=4" />
            <ApiInfo apiUrl="https://api.imgflip.com/get_memes" apiName="MemesAPI"/>
        </div>
    );

}