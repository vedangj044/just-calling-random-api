import React from "react";

export default function Message(props) {
    return (
        <div className="grid place-items-center mx-4 my-8">
            <div className="flex flex-col bg-blue-100 shadow-xl rounded-md md:px-16 py-8 px-4 max-w-2xl">
                <h2 className="text-4xl pt-8 font-light">Why this page exists? </h2>
                <p className="text-lg py-4 pb-4 font-regular">This page is for anyone around the globe who wants to start their open-source journey with <span><a className="text-green-900 font-semibold" href="https://hacktoberfest.digitalocean.com/" target="blank"> Hacktoberfest </a></span>. All you have to do is choose any publically available API, create a react component which calls your chosen API and display its response on the main page. You can find all the details and step-by-step procedures to make your first PR. Let's get going!</p>
                <div className="flex pb-5">
                    <a href="https://github.com/vedangj044/just-calling-random-api" target="blank" ><button className="bg-blue-500 rounded-md p-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Start Here</button></a>
                </div>
            </div>
        </div>
    );
}