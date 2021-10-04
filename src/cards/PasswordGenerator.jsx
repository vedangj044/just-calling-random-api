import React,{ useState} from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';


const PasswordGenerator = () => {
    const [length, setLength] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState({flag : false, message : "Enter the length of password"});

    const btnHandler = async () => {
        setStatus("Loading...");

        if(length>=3){
            let record = await fetch("https://passwordinator.herokuapp.com/generate?num=true&char=true&caps=true&len="+length)
            record = await record.json();
            setPassword(record.data);
            setStatus({flag : true, message : record.data});
        }
        else{
            setStatus({flag : false, message : "Length must be a number & can't be less than 3"})
        }
    }

    const myFunction = () =>{
        navigator.clipboard.writeText(password);
    }

    return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:pnpm x-4">
            <h1 className="text-xl py-2">Password Generator</h1>
            <input className="border px-2 p-1 focus:border-blue-400 outline-none border-blue-100 border-2 rounded" type="text" value={length} onChange={(e)=>setLength(e.target.value)} placeholder="Length of Password" />
            <button className="border p-1 border-blue-600 rounded ml-2 mb-2 w-35 bg-blue-200 hover:bg-blue-400 text-sm" onClick={btnHandler}>Generate</button>
            {status.flag && <button className="border p-1 border-blue-600 rounded ml-2 mb-2 w-35 bg-blue-200 hover:bg-blue-400 text-sm" onClick={myFunction}>Copy Password</button>}
            <h1>{status.message}</h1>
            <br/>
            <ContributorInfo
                username="deekay1712"
                profilePic="https://avatars.githubusercontent.com/u/80641727?v=4"
            />
            <ApiInfo apiUrl="https://github.com/fawazsullia/password-generator/" apiName="Passwordinator" />
        </div>
    )
}

export default PasswordGenerator
