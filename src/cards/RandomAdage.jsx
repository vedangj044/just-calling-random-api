import React, { useEffect, useState } from 'react';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';

const RandomAdage = () => {
  const [adage, setAdage] = useState('');
  const [adageQuestion, setAdageQuestion] = useState('');
  const [adageAnswer, setAdageAnswer] = useState('');
  const [adageQuote, setAdageQuote] = useState('');

  const getRandomAdage = () => {
    fetch('https://isvbscriptdead.com/api/fortune/')
      .then((response) => response.json())
      .then((result) => {
        if (result[0] === 'Q') {
          setAdage('');
          setAdageQuote('');
          let indexOfA = result.indexOf('A:');
          setAdageQuestion(result.substring(0, indexOfA));
          setAdageAnswer(result.substring(indexOfA));
        } else if (result.includes('-- ')) {
          setAdageQuestion('');
          setAdageAnswer('');
          let indexOfDashDash = result.indexOf('-- ');
          setAdage(result.substring(0, indexOfDashDash));
          setAdageQuote(result.substring(indexOfDashDash));
        } else {
          setAdageQuestion('');
          setAdageAnswer('');
          setAdageQuote('');
          setAdage(result);
        }
      });
  };

  useEffect(() => {
    getRandomAdage();
  }, []);

  return (
    <div className='mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4'>
      <h1 className='text-xl py-2'>adage</h1>
      <code>/ˈadɪdʒ/ </code>
      <p>a proverb or short statement expressing a general truth.</p>
      <br />
      <div className='m-4 p-5 rounded-lg bg-gray-100'>
        <h1 className='text-2xl font-medium'>{adage}</h1>
        {adageQuestion && (
          <h1 className='text-2xl font-medium'>{adageQuestion}</h1>
        )}
        {adageAnswer && (
          <h1 className='text-2xl font-medium italic pt-2'>{adageAnswer}</h1>
        )}
        {adageQuote && (
          <h1 className='text-2xl font-medium italic pt-2'>{adageQuote}</h1>
        )}
      </div>
      <button
        type='submit'
        class='mx-4 mb-4 bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded'
        onClick={getRandomAdage}
      >
        Click for more
      </button>
      <br />

      <ContributorInfo
        username='Paddlepop25'
        profilePic='https://avatars.githubusercontent.com/paddlepop25'
      />

      <ApiInfo
        apiUrl='https://isvbscriptdead.com/api/fortune/'
        apiName='Random Adage API'
      />
    </div>
  );
};

export default RandomAdage;
