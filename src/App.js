import "./App.css";
import Header from "./components/header";
import Message from "./components/content";

import RandomQuotes from "./cards/randomQuotes";
import RandomAdvice from "./cards/randomAdvice";

import RandomAnime from "./cards/randomAnime";
import StarWarsAPI from "./cards/starWarsAPI";
import RandomDadJoke from "./cards/randomDadJoke";

function App() {
  return (
    <div className="mx-0 xl:mx-40 font-body">
      <Header />
      <Message />
    
      <RandomQuotes />
      <RandomAdvice />
      <RandomAnime/>
      <StarWarsAPI />
      <RandomDadJoke />
    </div>
  );
}

export default App;
