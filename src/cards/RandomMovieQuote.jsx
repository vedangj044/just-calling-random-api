import { useEffect, useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const movieQuoteOriginalValue = {
  quote: "",
  role: "",
  show: "",
};

const RandomMovieQuote = () => {
  const [isError, setIsError] = useState(false);
  const [movieQuote, setMovieQuote] = useState(movieQuoteOriginalValue);

  const resetMovieQuote = () => {
    setMovieQuote(movieQuoteOriginalValue);
  };

  useEffect(() => {
    axios
      .get("https://movie-quote-api.herokuapp.com/v1/quote/")
      .then((res) => {
        const movieQuoteData = res.data;
        setMovieQuote({
          quote: movieQuoteData.quote,
          role: movieQuoteData.role,
          show: movieQuoteData.show,
        });
        setIsError(false);
      })
      .catch((e) => {
        resetMovieQuote();
        setIsError(true);
      });
  }, []);

  return (
    <div className="">
      <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
        <h1 className="text-xl py-2 text-black Bold">Random Movie Quete</h1>

        <div class="max-w-xs sm:max-w-sm mt-8 mx-auto bg-grey-light rounded-lg shadow p-8">
          <h2 class="italic text-right text-blue-darkest leading-normal">
            {!isError ? (
              <div>&ldquo; {movieQuote.quote} &rdquo;</div>
            ) : (
              <div>&ldquo; Something Error! &rdquo;</div>
            )}
          </h2>
          <p class="text-center pt-8 text-grey-darker">
            {!isError && `${movieQuote.role} - ${movieQuote.show}`}
          </p>
        </div>

        <ContributorInfo
          username="Armakuji"
          profilePic="https://avatars.githubusercontent.com/Armakuji"
        />
        <ApiInfo
          apiUrl="https://github.com/F4R4N/movie-quote/"
          apiName="movie-quote"
        />
      </div>
    </div>
  );
};

export default RandomMovieQuote;
