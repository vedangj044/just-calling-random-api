import React,{useState} from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';


const HistoryOfTheDay = () => {

    const [status, setStatus] = useState({flag : false, message : ""});
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    
    
    const btnHandler = async () => {
        setStatus("Loading...");
        let data = await fetch("http://numbersapi.com/"+mm+"/"+dd+"/date")
        const ans = await data.text()
        setStatus({flag : true, message : ans})
    }
    


    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:pnpm x-4">
            <h1 className="text-xl py-2">History of the day !!</h1>
            <h1>{status.message}</h1>
            <button className="border p-1 border-blue-600 rounded mb-2 w-35 bg-blue-200 hover:bg-blue-400 text-sm" onClick={btnHandler}>Get The Fact</button>
            <br/>
            <ContributorInfo
                username="deekay1712"
                profilePic="https://avatars.githubusercontent.com/u/80641727?v=4"
            />
            <ApiInfo apiUrl="http://numbersapi.com/" apiName="Numbers API" />
        </div>
    )
}

export default HistoryOfTheDay
