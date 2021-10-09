import React,{useEffect, useState} from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';


const PageVisits = () => {

    const [status, setStatus] = useState("");

    useEffect(()=>{
        const dk = async () => {
            let data = await fetch("https://api.countapi.xyz/hit/vedangj044.just-calling-random-api/visits")
            const ans = await data.json();
            setStatus(ans.value)
        }
        dk();
    },[])
    
    


    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:pnpm x-4">
            <h1 className="text-xl py-2">Welcome !!</h1>
            <div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg" role="alert">
                <p class="font-bold">You are the visitor {status} :)</p>
                
            </div>
            <br/>
            <ContributorInfo
                username="deekay1712"
                profilePic="https://avatars.githubusercontent.com/u/80641727?v=4"
            />
            <ApiInfo apiUrl="https://countapi.xyz/" apiName="Count API" />
        </div>
    )
}

export default PageVisits
