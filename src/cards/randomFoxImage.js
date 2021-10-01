import React, {useState, useEffect} from 'react';
import ContributorInfo from '../components/contributorInfo';
import ApiInfo from '../components/apiInfo';

export default function RandomFoximage(props) {
    
    const [foxImage, setFoxImage] = useState("");

    useEffect(()=>{
        fetch("https://randomfox.ca/floof/")
        .then((res)=>res.json())
        .then((data)=>setFoxImage(data.image))
    },[])
    return (
        <div>
            <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
                <h1 className="text-xl py-2">
                Random Fox images
                </h1>
                <img className="h-1/5 w-1/5 pb-6" src={foxImage} alt="foximage" />
                
                <ContributorInfo
                username="vae97"
                profilePic="https://avatars.githubusercontent.com/u/62983845?v=4"
                />
                <ApiInfo
                apiUrl="https://randomfox.ca/floof/"
                apiName="Random Fox"
                />
            </div>
        </div>
    )
}
