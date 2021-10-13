import React, { useRef, useState } from "react";
import ApiInfo from "../components/apiInfo";
import ContributorInfo from "../components/contributorInfo";

const MusicPlayer = () => {
  const [songName, setSongName] = useState("");
  const [source, setSource] = useState("");
  const audioElementRef = useRef();
  const [status, setStatus] = useState({
    flag: false,
    message: "Let's play your favourite song..",
  });

  const playBtnHandler = async () => {
    setStatus({ flag: false, message: "Loading..." });
    let audioUrl = await fetch("https://sudoic.herokuapp.com/sudoic", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ query: songName + " song lyrics" }),
    });
    audioUrl = await audioUrl.json();
    if (audioUrl.data) {
      setSource(audioUrl.data);
      setStatus({ flag: true, message: "" });
      audioElementRef.current.play();
    } else {
      setStatus({ flag: false, message: "Song not found :(" });
      setSource("");
    }
  };

  return (
    <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Music Player (Sudoic API)</h1>
      <input
        className="border px-2 p-1 focus:border-blue-600 outline-none border-blue-500 border-2 rounded"
        type="text"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
        placeholder="Type any song's name here..."
      />
      <button
        className="border p-1 border-blue-600 rounded ml-2 mb-2 w-14 bg-blue-200 hover:bg-blue-400"
        onClick={playBtnHandler}
      >
        Play
      </button>
      {/* displaying audio element only when we have a source to play the audio from */}
      {status.flag ? (
        <audio
          ref={audioElementRef}
          src={source}
          controls
          className="p-1 pl-0 mt-2"
        ></audio>
      ) : (
        <h1>{status.message}</h1>
      )}
      <br />
      <ContributorInfo
        username="sudo-nick16"
        profilePic="https://avatars.githubusercontent.com/u/73229823?v=4"
      />
      <ApiInfo
        apiUrl="https://github.com/sudo-nick16/sudoic-server"
        apiName="Sudoic"
      />
    </div>
  );
};

export default MusicPlayer;
