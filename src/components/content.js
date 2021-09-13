import React from "react";

export default function Message(props) {
    return (
        <div className="grid place-items-center mx-4 my-8">
            <div className="flex flex-col bg-red-100 rounded-md px-16 max-w-2xl">
                <h2 className="text-4xl pt-8 font-light">Why this page exists? </h2>
                <p className="text-lg py-4 pb-8 font-regular">This page is for anyone around the globe who wants to start their open-source journey with <span><a className="text-green-900" href="https://hacktoberfest.digitalocean.com/" target="blank"> Hacktoberfest </a></span>. All you have to do is choose any publically available API, create a react component which calls your chosen API and display its response on the main page. You can find all the details and step-by-step procedures to make your first PR. Let's get going!</p>
            </div>
        </div>
    );
}