import React from "react";
import { useState } from "react";
import ContributorInfo from "./../components/contributorInfo";
import ApiInfo from "./../components/apiInfo";

export default function Foaas() {
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [response, setResponse] = useState("");

  const search = () => {
    fetch("https://foaas.com/shutup/" + to + "/" + from, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      });
  };

  return (
    <div className="mx-4 my-8 rounded-md p-4  md:px-4">
      <h1 className="text-xl py-2 text-blue-700 font-bold">
        STFU as a service
      </h1>
      <input
        type="text"
        name="from"
        placeholder=" From "
        className="border-2 border-blue-300 mr-4 py-2"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        name="to"
        placeholder=" To "
        className="border-2 border-blue-300 mr-4 py-2"
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => search()}
        className="bg-blue-900 p-2 rounded-2xl text-white"
      >
        GO
      </button>
      {response !== "" ? (
        <h1 className="text-2xl font-medium pb-6 pt-4">
          {response.message} <br /> <h5>{response.subtitle}</h5>
        </h1>
      ) : null}
      <br />
      <ContributorInfo username="" profilePic="https://foaas.com/shutup/" />
      &nbsp;&nbsp;&nbsp;
      <ApiInfo apiUrl="https://foaas.com/" apiName="Foaas" />
    </div>
  );
}
