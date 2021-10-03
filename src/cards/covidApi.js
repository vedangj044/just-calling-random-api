import React, {useEffect, useState} from 'react'
import ContributorInfo from '../components/contributorInfo';
import ApiInfo from '../components/apiInfo';

export default function Covidapi(props) {

    const [covidData, setCovidData] = useState({});

    useEffect(()=>{
        fetch("https://api.covid19api.com/summary")
        .then((res)=> res.json())
        .then((data)=>setCovidData(data.Global))
    },[])
    

    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Covid-19 Global Stats</h1>
            <h1 className="text-2xl font-medium pb-6">Total Confirmed : {covidData.TotalConfirmed}</h1>
            <h1 className="text-2xl font-medium pb-6">Total Deaths : {covidData.TotalDeaths}</h1>
            <h1 className="text-2xl font-medium pb-6">New Deaths : {covidData.NewDeaths}</h1>

            <ContributorInfo
                username="vae97"
                profilePic="https://avatars.githubusercontent.com/u/62983845?v=4"
            />
            <ApiInfo
                apiUrl="https://documenter.getpostman.com/view/10808728/SzS8rjbc"
                apiName="COVID19 API"
            />
        </div>
    )
}
