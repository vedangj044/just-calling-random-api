import React, { useEffect, useState } from 'react';
import ContributorInfo from '../components/contributorInfo';
import ApiInfo from '../components/apiInfo';

export default function CryptoDetails(props) {

  const [cryptoName, setCryptoName] = useState();
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [error, setError] = useState();
  var checked;

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((res) => setData([res.data]));
  }, []);

  const displayDetails = () => {
    data.map(res => {
      res.filter(id => id.id === cryptoName).map(final => {
        checked = 1;
        setFinalData([final]);
        return 0;
      })
      return 0;
    });
    if (checked === 1) {
      setError(0);

    } else {
      setError(1);
    }
    document.getElementById("crypto").value = "";
  }


  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl font-bold italic py-2">Crypto Currrency Details :</h1>
      <div className="flex items-center">
        <div>
          <input
            id="crypto"
            required
            aria-required
            className="rounded-md border border-blue-900 px-4 py-2 mx-2"
            placeholder="Enter name of crypto"
            onChange={(e) => setCryptoName(e.target.value)}
          />
        </div>
        <div>
          <button className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={displayDetails}>Search</button>
        </div>
      </div>
      <div>
        {error === 1 ?
          <div className="grid place-items-start mx-4 my-8 w-20 h-20">
            <div className=" flex flex-col bg-blue-100 rounded-md md:px-16 px-4 max-w-2xl">
              <h1 className="text-xl font-bold text-center">No such crptocurrency found!</h1>
            </div>
          </div>
          :


          finalData.map(res => {
            return (
              <div className="grid place-items-start  my-8">
                <div className=" flex flex-col bg-blue-100 rounded-md md:px-16 px-4 max-w-2xl">
                  <div className="my-2 py-4">
                    <div className="flex">
                      <h5 className="font-bold text-xl italic">Name : </h5>
                      <p className=" text-xl italic mx-2"> {res.name}</p>
                    </div>
                    <div className="flex">
                      <h5 className="font-bold text-xl italic">ID : </h5>
                      <p className=" text-xl italic mx-2"> {res.id}</p>
                    </div>
                    <div className="flex">
                      <h5 className="font-bold text-xl italic">Rank : </h5>
                      <p className=" text-xl italic mx-2"> {res.rank}</p>
                    </div>
                    <div className="flex">
                      <h5 className="font-bold text-xl italic">Symbol : </h5>
                      <p className=" text-xl italic mx-2"> {res.symbol}</p>
                    </div>
                    <div className="flex">
                      <h5 className="font-bold text-xl italic">price: </h5>
                      <p className=" text-xl italic mx-2"> {res.priceUsd}</p>
                    </div>
                  </div>

                </div>
              </div>

            );
          })
        }
      </div>



      <ContributorInfo username="sejalrai23" profilePic="https://avatars.githubusercontent.com/u/62560971?s=400&u=1e003d4cd23d79722f70a6d8b2da4a868e0d9782&v=4" />
      <ApiInfo apiUrl="https://api.coincap.io/v2/assets" apiName="coincap" />
    </div>
  );
}