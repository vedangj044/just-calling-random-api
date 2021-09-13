import React from "react";
import github from "../github.svg";

export default function Header(props) {
    return (
        <div className="mx-4 my-8" >
            <div className="flex items-baseline ">
                <a className="flex-auto" href="/"><h1 className="my-2 text-4xl font-bold font-sans px-4 font-bold">Just Calling Random APIs</h1></a>
                <div className="">
                    <a href="https://github.com/vedangj044/just-calling-random-api" target="blank" class="inline-block">
                        <embed class="h-8 w-8 pointer-events-none" src={github}/>
                    </a>
                </div>
            </div>
            <hr/>
        </div>
    );
}