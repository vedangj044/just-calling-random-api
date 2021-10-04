import React, {useEffect, useState} from 'react'
import ApiInfo from '../components/apiInfo'
import ContributorInfo from '../components/contributorInfo'

const RandomDuckApi = () => {
    const [img, setImg] = useState("")
    useEffect(()=>{
        // fetch("https://random-d.uk/api/v2/random")
        // .then(res=>res.json())
        // .then((res)=>{
        //     setImg(res.url)
        // })
    },[])
    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Random Duck API</h1>
            <img width="200" height="200" src={img} alt="" />
            <ContributorInfo username="shreyanshmalvya" profilePic="https://avatars.githubusercontent.com/u/80682098?v=4" />
            <ApiInfo apiUrl="https://random-d.uk/api/" apiName="Random Duck API"/>
        </div>
    )
}

export default RandomDuckApi;
