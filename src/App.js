import "./App.css";
import Header from "./components/header";
import Message from "./components/content";
import MusicPlayer from "./cards/MusicPlayer";
import RandomQuotes from "./cards/randomQuotes";
import RandomAdvice from "./cards/randomAdvice";
import RandomAnime from "./cards/randomAnime";
import StarWarsAPI from "./cards/starWarsAPI";
import RandomDadJoke from "./cards/randomDadJoke";
import RandomCatFacts from "./cards/randomCatFacts";
import ChuckNorrisJoke from "./cards/chuckNorrisJoke";
import RandomGeekJokes from "./cards/randomGeekJokes";
import RandomBriyaniPics from "./cards/RandomBriyaniPics";
import RandomActivity from "./cards/boredAPI";
import RandomAnimfacts from "./cards/randomDogfacts";
import BreadPuns from "./cards/breadPuns";
import PokeApi from "./cards/pokeAPI";
import RandomCreditCard from "./cards/randomCreditCard";
import RandomFoximage from "./cards/randomFoxImage";


function App() {
  return (
    <div className="mx-0 xl:mx-40 font-body">
      <Header />
      <Message />
      <RandomAnimfacts />
      <MusicPlayer />
      <RandomQuotes />
      <RandomAdvice />
      <RandomAnime />
      <StarWarsAPI />
      <RandomDadJoke />
      <RandomCatFacts />
      <ChuckNorrisJoke />
      <RandomGeekJokes/>
      <RandomBriyaniPics/>
      <RandomGeekJokes />
      <RandomActivity />
      <BreadPuns />
      <PokeApi />
      <RandomCreditCard/>
      <RandomFoximage/>
    </div>
  );
}

export default App;
