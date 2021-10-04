import { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";


const RandomProfile=()=> {
  const url = 'https://randomuser.me/api/'
  const defaultImage = 'https://randomuser.me/api/portraits/men/23.jpg'

  // common conventions
  const [isLoading, setIsLoading] = useState(true)
  const [randomPerson, setRandomPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  const fetchRandomPerson = async () => {
    setIsLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    // let's have a look at the API
    const person = data.results[0]
    // destructure values
    const {
      phone,
      email,
      login: { password },
      name: { first, last },
      dob: { age },
      picture: { large: image },
      location: {
        street: { number, name },
      },
    } = person
    // es6 feature
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }

    setRandomPerson(newPerson)
    setIsLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }

  useEffect(() => {
    fetchRandomPerson()
  }, [])

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.id
      setTitle(newValue)
      setValue(randomPerson[newValue])
    }
  }

  return (
    <div className="">
      <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
      <h1 className="text-xl py-2">Random User API</h1>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(randomPerson && randomPerson.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>my {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button className='icon' data-id='name' onMouseOver={handleValue}>
              <FaUser />
            </button>
            <button className='icon' data-id='email' onMouseOver={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-id='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-id='street' onMouseOver={handleValue}>
              <FaMap />
            </button>
            <button className='icon' data-id='phone' onMouseOver={handleValue}>
              <FaPhone />
            </button>
            <button
              className='icon'
              data-id='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={fetchRandomPerson}>
            {isLoading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
     
    <ContributorInfo
          username="kotwani2883"
          profilePic="https://avatars.githubusercontent.com/u/56580582?v=4"
        />
        <ApiInfo
          apiUrl="https://randomuser.me/api/"
          apiName="Random User API"
        />
    </div>
    </div>
  )
}

export default RandomProfile;
