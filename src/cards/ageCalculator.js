import React from 'react'
import { useState } from 'react';
import ContributorInfo from './../components/contributorInfo';
import ApiInfo from './../components/apiInfo';

export default function AgeCalculator() {

    let [day, setDay] = useState("")
    let [month, setMonth] = useState("")
    let [year, setYear] = useState("")
    let [response, setResponse] = useState("")


    const search = () => {
        fetch(`https://starta11.herokuapp.com/calculate?day=${day}&month=${month}&year=${year}`)
            .then((res) => res.json())
            .then((data) => {
                setResponse(data)
            })
    }

    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-green-300 md:px-4">
            <h1 className="text-xl py-2 text-green-700 font-bold">Interplanetary Age Calculator</h1>

            <input type="text" name="day" placeholder=" Day " className="border-2 border-green-300 mr-4 py-2"
             value={day} onChange={(e)=>{setDay(e.target.value)}}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         
         <input type="text" name="month" placeholder=" Month " className="border-2 border-green-300 mr-4 py-2"
             value={month} onChange={(e)=>{setMonth(e.target.value)}}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         
         <input type="text" name="year" placeholder=" Year " className="border-2 border-green-300 mr-4 py-2"
             value={year} onChange={(e)=>{setYear(e.target.value)}}
         />&nbsp;&nbsp;

            <button onClick={() => search()}
                className="bg-green-900 p-2 rounded-2xl text-white"
            >Search your Age</button>

            {
                (response !== "") ? <h1 className="text-2xl font-medium pb-6 pt-4">
                    
                    Mercury : {response.mercury} years&nbsp;&nbsp;&nbsp;&nbsp;
                    Venus : {response.venus} years&nbsp;&nbsp;&nbsp;&nbsp;
                    Earth : {response.earth} years&nbsp;&nbsp;&nbsp;&nbsp; <p/><br/>
                    Mars : {response.mars} years&nbsp;&nbsp;&nbsp;&nbsp;
                    Jupiter : {response.jupiter} years&nbsp;&nbsp;&nbsp;&nbsp;
                    Saturn : {response.saturn} years&nbsp;&nbsp;&nbsp;&nbsp;<p/><br/>
                    Neptune : {response.neptune} years&nbsp;&nbsp;&nbsp;&nbsp;
                    Uranus : {response.uranus} years&nbsp;&nbsp;&nbsp;&nbsp;
                    Pluto : {response.pluto} years&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    </h1>
                    : null
            }

            <ContributorInfo username="Thanos" profilePic="data:image/jpeg;base64,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" />
            <ApiInfo apiUrl="https://www.exploratorium.edu/ronh/age/" apiName="Interplanetary Age" />
        </div>
    )
}

