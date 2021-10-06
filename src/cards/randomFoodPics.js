import React,{useState, useEffect} from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';

export default function RandomFoodPicApi() {

    const [foodImg, setImg] = useState("");

    useEffect(() => {
      fetch("https://foodish-api.herokuapp.com/api/")
      .then((res) => res.json())
      .then((data) => setImg(data.image));
        }, []);


    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
          <h1 className="text-xl py-2">Random Food Pic API</h1>
          <img className="h-1/5 w-1/5 pb-6" src={foodImg} alt="foodimage" />
    
          <ContributorInfo
            username="mukeshmjn"
            profilePic="https://avatars.githubusercontent.com/u/68895120?v=4"
          />
          <ApiInfo apiUrl="https://foodish-api.herokuapp.com/api/" apiName="Random Food Pic" />
        </div>
      );

}