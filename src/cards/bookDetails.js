import React, { useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const BookDetails = (props) => {
  const [bookData, setBookData] = useState(null);
  const [isbn, setIsbn] = useState("");

  const loadDataHandler = () => {
    fetch(`http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`)
      .then((response) => response.json())
      .then((data) => {
        if (data !== []) {
          const keys = Object.keys(data.records);
          setBookData(data.records[keys].data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Book Details by ISBN</h1>
      <div className="flex items-center">
        <div>
          <input
            id="crypto"
            required
            value={isbn}
            aria-required
            className="rounded-md border border-green-900 px-4 py-2 mx-2"
            placeholder="Enter name of crypto"
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div>
          <button
            className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={loadDataHandler}
          >
            Find
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-medium pb-6">
        Title : {bookData && bookData.title}
      </h1>
      <h1 className="text-2xl font-medium pb-6">
        {/* Zip Code : {"ff"} */}
        Publish Date : {bookData && bookData.publish_date}
      </h1>
      <h1 className="text-2xl font-medium pb-6">
        Number of Pages : {bookData && bookData.number_of_pages}
      </h1>

      <ContributorInfo
        username="jmk"
        profilePic="https://avatars.githubusercontent.com/u/56209657?s=40&v=4"
      />
      <ApiInfo apiUrl="http://openlibrary.org" apiName="Book Details API" />
    </div>
  );
};

export default BookDetails;
