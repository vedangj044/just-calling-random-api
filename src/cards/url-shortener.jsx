import React,{ useState} from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';


const UrlShortener = () => {
    const [longUrl, setLongUrl] = useState('');
    const [code, setCode] = useState('');
    const [status, setStatus] = useState({flag : false, message : "Enter the URL"});

    const btnHandler = async () => {
        setStatus( {flag : false, message : "Loading..."});
        let shortenUrl = await fetch("https://gotiny.cc/api",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "input" : longUrl })
        })
        shortenUrl = await shortenUrl.json();

        try{
            setCode(shortenUrl[0].code);
            setStatus({flag : true, message : "gotiny.cc/"+shortenUrl[0].code});
        }catch{
            setStatus({flag : false, message : "I'm sure you haven't enetered the proper URL :("});
            
        }
    }

    const myFunction = () =>{
        let tempUrl = "gotiny.cc/"+code;
        navigator.clipboard.writeText(tempUrl);
        
    }

    return (
        <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:pnpm x-4">
            <h1 className="text-xl py-2">URL Shortener</h1>
            <input className="border px-2 p-1 focus:border-blue-400 outline-none border-blue-100 border-2 rounded" type="text" value={longUrl} onChange={(e)=>setLongUrl(e.target.value)} placeholder="Long URL" />
            <button className="border p-1 border-blue-600 rounded ml-2 mb-2 w-35 bg-blue-200 hover:bg-blue-400 text-sm" onClick={btnHandler}>Shorten URL</button>
            {status.flag && <button className="border p-1 border-blue-600 rounded ml-2 mb-2 w-35 bg-blue-200 hover:bg-blue-400 text-sm" onClick={myFunction}>Copy URL</button>}
            <h1>{status.message}</h1>
            <br/>
            <ContributorInfo
                username="deekay1712"
                profilePic="https://avatars.githubusercontent.com/u/80641727?v=4"
            />
            <ApiInfo apiUrl="https://github.com/robvanbakel/gotiny-api" apiName="gotiny.cc" />
        </div>
    )
}

export default UrlShortener
