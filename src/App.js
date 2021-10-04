import './App.css'
import Header from './components/header'
import Message from './components/content'
import RandomKanyeQuote from './cards/RandomKanyeQuote'
import MusicPlayer from './cards/MusicPlayer'
import RandomQuotes from './cards/randomQuotes'
import RandomAdvice from './cards/randomAdvice'
import RandomAnime from './cards/randomAnime'
import StarWarsAPI from './cards/starWarsAPI'
import RandomDadJoke from './cards/randomDadJoke'
import RandomCatFacts from './cards/randomCatFacts'
import ChuckNorrisJoke from './cards/chuckNorrisJoke'
import RandomGeekJokes from './cards/randomGeekJokes'
import RandomBriyaniPics from './cards/RandomBriyaniPics'
import RandomActivity from './cards/boredAPI'
import RandomAnimfacts from './cards/randomDogfacts'
import BreadPuns from './cards/breadPuns'
import RandomDogimage from './cards/RandomDogimage'
import PokeApi from './cards/pokeAPI'
import RandomCreditCard from './cards/randomCreditCard'
import RandomFoxImage from './cards/randomFoxImage'
import Covidapi from './cards/covidApi'
import GitHubUser from './cards/githubUser'
import RandomCatimages from './cards/RandomCatimages'
import ZipCodeDetailsAPI from './cards/ZipCodeDetailsAPI'
import ImageCompression from './cards/imageCompressionAPI'
import GiphyApi from './cards/giphyapi'
import Dungeons from './cards/Dungeons'
import WeatherApi from './cards/weatherApi';
import CryptoDetails from './cards/cryptoDetails'
import Publicholiday from './cards/publicholiday'
function App() {
  return (
    <div className='mx-0 xl:mx-40 font-body'>
      <Header />
      <Message />
      <Dungeons />
      <GiphyApi />
      <ImageCompression />
      <RandomKanyeQuote />
      <RandomAnimfacts />
      <MusicPlayer />
      <RandomQuotes />
      <RandomAdvice />
      <RandomAnime />
      <StarWarsAPI />
      <RandomDadJoke />
      <RandomCatFacts />
      <ChuckNorrisJoke />
      <RandomBriyaniPics />
      <RandomGeekJokes />
      <RandomActivity />
      <BreadPuns />
      <RandomDogimage />
      <PokeApi />
      <RandomCreditCard />
      <RandomFoxImage />
      <GitHubUser />
      <RandomCatimages />
      <ZipCodeDetailsAPI />
      <WeatherApi />
      <Covidapi />
      <CryptoDetails />
      <Publicholiday/>
    </div>
  )
}

export default App;
