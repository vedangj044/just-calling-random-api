import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const RandomCreditCard = () => {
  const [creditCard, setCreditCard] = useState("");
  useEffect(() => {
    const formData = new FormData();
    formData.append("Type", "visa");  
    axios({
        method: "post",
        url: "https://randommer.io/Card",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          setCreditCard(response.data);
        })
        .catch(function (response) {
          console.error(response);
    });
  }, []);

  return(
    <div className="">
      <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
        <h1 className="text-xl py-2">
         Random Credit Card
        </h1>
        {creditCard && <h1 className="text-2xl font-medium pb-6">
            Card Number : {creditCard.cardNumber} <br />
            CVV: {creditCard.cvv}  <br />       
            Name: {creditCard.fullName} <br />
            pin: {creditCard.pin} <br />
            type: Visa
        </h1>}

        <ContributorInfo
          username="parnus01"
          profilePic="https://avatars.githubusercontent.com/u/21211130?v=4"
        />
        <ApiInfo
          apiUrl="https://randommer.io/Card"
          apiName="Generate random credit cards"
        />
      </div>
    </div>
  );
};

export default RandomCreditCard;
