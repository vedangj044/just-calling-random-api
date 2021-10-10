import React,{useEffect, useState} from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';


const PRs = () => {

    const [status, setStatus] = useState([]);

    useEffect(()=>{
        const dk = async () => {
            let data = await fetch("https://api.github.com/repos/vedangj044/just-calling-random-api/pulls")
            const ans = await data.json();
            setStatus(ans)
        }
        dk();
    },[]);
    
    

    const x = status.map((s) => {
      return <div>{s}</div>
    });

    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:pnpm x-4">
            <h1 className="text-xl py-2">Welcome !!</h1>
          {x}
        </div>
    )
}

export default PRs
