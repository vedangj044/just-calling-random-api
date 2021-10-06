import React from 'react'
import {useState}  from 'react';
import axios from 'axios';
import ContributorInfo from '../components/contributorInfo';
import ApiInfo from '../components/apiInfo';
const Publicholiday = () => {
    const [holiday,setholiday]=useState([]);
    const [day,setday]=useState('');
    const [month,setmonth]=useState('');
    const [year,setyear]=useState('');
    
    const getdata=()=>{
       const API_KEY=process.env.REACT_APP_HOLIDAY_API_KEY;
        axios.get(`https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=in
    &year=${year}&month=${month}&day=${day}`)
        .then(response => {
            console.log(response.data);
            //console.log(response.data);
            setholiday(response.data);
        })
        .catch(error => {
            console.log(error);
             
        });
    }
    
    return (
        <div className="mx-1 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
         <h1 className="text-xl font-bold italic py-2">
         Enter the following to know if there is a public holiday or not
         </h1>
         
         <input type="text" name="day" placeholder="Enter Country" className="border-2 border-red-300" 
         value='India'/>&nbsp;&nbsp;&nbsp;&nbsp;
         
         <input type="text" name="day" placeholder="Enter day from 01 to 07" className="border-2 border-green-300"
             value={day} onChange={(e)=>{setday(e.target.value)}}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         
         <input type="text" name="month" placeholder="Enter month from 1 to 12" className="border-2 border-blue-300"
             value={month} onChange={(e)=>{setmonth(e.target.value)}}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         
         <input type="text" name="year" placeholder="Enter year(Eg:2020)" className="border-2 border-yellow-300"
             value={year} onChange={(e)=>{setyear(e.target.value)}}
         />&nbsp;&nbsp;
         
         <button type="submit"  onClick={getdata} className="group relative   
         py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 
         hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             Submit
         </button>
         <h1 className="text-xl font-bold italic py-2">
         <div>
         
        </div>
        </h1>    
            {   (holiday.length<=0)?
         (<h1 className="bg-pink-300">No holiday!😢</h1>):(<h1 className="bg-pink-300">Yup,it's {holiday[0].name}😃</h1>)       
            }

         <ContributorInfo username="MuditWadhwa" profilePic="https://avatars.githubusercontent.com/MuditWadhwa" />
      <ApiInfo apiUrl="https://www.abstractapi.com/holidays-api" apiName="Abstract Public Holidays" />          
        </div>
    )
}

export default Publicholiday
