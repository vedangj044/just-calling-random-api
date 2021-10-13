import React from "react";

export default function ContributorInfo(props) {
  return (
    <a href={"https://github.com/" + props.username} target="blank">
      <div className="inline-flex items-center transform hover:bg-blue-100 p-2 transition duration-500 hover:scale-110 rounded-md cursor-pointer">
        <img
          className="rounded-full h-8 w-8"
          src={props.profilePic}
          alt="Contributor's avatar"
        />
        <h1 className="px-2 text-xl">{props.username}</h1>
      </div>
    </a>
  );
}
