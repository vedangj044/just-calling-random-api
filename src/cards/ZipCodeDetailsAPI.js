import React, {useEffect, useState} from 'react'
import ContributorInfo from '../components/contributorInfo';
import ApiInfo from '../components/apiInfo';

const ZipCodeAPI = (props) => {

    const [zipCodeData, setZipCodeData] = useState({});

    useEffect(()=>{
        fetch("https://api.zippopotam.us/us/33162")
        .then((response)=> response.json())
        .then((data)=>setZipCodeData(data))
    },[])
    

    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
            <h1 className="text-xl py-2">Zip Code Details</h1>
            <h1 className="text-2xl font-medium pb-6">Zip Code : {zipCodeData["post code"]}</h1>
            <h1 className="text-2xl font-medium pb-6">Country : {zipCodeData.country}</h1>
            <h1 className="text-2xl font-medium pb-6">Country Abbreviation : {zipCodeData["country abbreviation"]}</h1>

            <ContributorInfo
                username="mdkacer"
                profilePic="https://avatars.githubusercontent.com/u/56209657?s=40&v=4"
            />
            <ApiInfo
                apiUrl="https://api.zippopotam.us"
                apiName="Zip Code API"
            />
        </div>
    )
}

export default ZipCodeAPI;
