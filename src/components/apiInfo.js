import React from "react";

export default function ApiInfo(props) {
  return (
    <a href={props.apiUrl} target="blank">
      <div className="px-8 inline-flex items-center transform hover:bg-blue-100 p-2 m-2 transition duration-500 hover:scale-110 rounded-md cursor-pointer">
        <img
          className="rounded-full h-8 w-8"
          src="https://static.thenounproject.com/png/1429392-200.png"
          alt="Hyperlink icon"
        />
        <h1 className="px-2 text-xl">{props.apiName}</h1>
      </div>
    </a>
  );
}
