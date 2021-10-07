import React from 'react'
import { useState } from 'react';
import ContributorInfo from './../components/contributorInfo';
import ApiInfo from './../components/apiInfo';

function GenderGuess() {

    let [name, setName] = useState("")
    let [gender, setGender] = useState("")

    const search = (name) => {
        fetch(`https://api.genderize.io/?name=${name}`)
            .then((res) => res.json())
            .then((data) => {
                setGender(data.gender)
            })
    }

    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
            <h1 className="text-xl py-2">Gender Guessing API</h1>

            <input type="text"
                className="border-2 mr-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => search(name)}
                className="bg-gray-900 p-2 rounded-2xl text-white"
            >Search your Gender!</button>

            {
                (gender !== "") ? <h1 className="text-2xl font-medium pb-6 pt-4">{gender}</h1>
                    : null
            }

            <ContributorInfo username="AniketAgarwal21" profilePic="https://avatars.githubusercontent.com/u/69319004?v=4" />
            <ApiInfo apiUrl="https://api.genderize.io/?name=randomname" apiName="GenderGuess" />
        </div>
    )
}

export default GenderGuess
