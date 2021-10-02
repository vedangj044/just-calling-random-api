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
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Zip Code Details</h1>
            <h1 className="text-2xl font-medium pb-6">Zip Code : {zipCodeData["post code"]}</h1>
            <h1 className="text-2xl font-medium pb-6">Total Deaths : {zipCodeData.country}</h1>
            <h1 className="text-2xl font-medium pb-6">New Deaths : {zipCodeData["country abbreviation"]}</h1>

            
        </div>
    )
}

export default ZipCodeAPI;
