import React, { useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const MovieCard = (props) => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const { movie } = props;
  const movieOverview = isSeeMore
    ? movie.overview
    : movie.overview.substr(0, 50) + "...";

  return (
    <div className="border border-black border-opacity-20 shadow-xl rounded p-4 grid grid-cols-3 gap-4">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
          className="rounded"
        />
      </div>
      <div className="col-span-2">
        <h1 className="font-bold text">{movie.title}</h1>
        <div className="text-sm">
          <p>
            Release date : <b>{movie.release_date}</b>
          </p>
          <p>
            Vote (avg) : <b>{movie.vote_average}</b>
          </p>
          <p>
            Vote count : <b>{movie.vote_count}</b>
          </p>
          <p>
            Popularity : <b>{movie.popularity}</b>
          </p>
          <p>
            <i>{movieOverview}</i>
          </p>
          <p>
            {isSeeMore ? (
              <span
                className="text-blue-300 underline cursor-pointer"
                onClick={() => setIsSeeMore(false)}
              >
                see less
              </span>
            ) : (
              <span
                className="text-blue-300 underline cursor-pointer"
                onClick={() => setIsSeeMore(true)}
              >
                see more
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Movies = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const searchMovies = (page = 1) => {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const params = {
      api_key: apiKey,
      query: keyword,
      page,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const url = "https://api.themoviedb.org/3/search/movie";

    setIsLoading(true);

    axios
      .get(url, { params, headers })
      .then((response) => {
        console.log(response);
        if (!response || !response.data || !response.data.results) return;

        setMovies(response.data.results);
        setTotalPage(response.data.total_pages);
        setCurrentPage(page);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handlePreviousPage = () => {
    if (currentPage <= 1) return;

    searchMovies(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage >= totalPage) return;

    searchMovies(currentPage + 1);
  };

  return (
    <div className="mx-4 my-111 rounded-md p-4 border-1 shadow-2xl md:px-4">
      <h1 className="text-xl py-2">Movies API</h1>

      <div className="flex justify-between gap-2">
        <input
          className="border-2 border-gray-300 p-2 block w-full border-r-2 rounded"
          type="text"
          value={keyword}
          placeholder="Search for movie title (ex: Batman, Superman, etc.)"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="p-4 bg-blue-600 rounded font-semibold text-white"
          onClick={() => searchMovies()}
        >
          {isLoading ? "Loading.." : "Search"}
        </button>
      </div>

      {movies.length > 0 && (
        <div className="mt-4">
          <h1 className="text-lg italic">
            Page <b>{currentPage}</b> of <b>{totalPage}</b>
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {movies.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <button
              onClick={handlePreviousPage}
              className="w-full bg-green-500 hover:bg-green-700 disabled:opacity-50 text-lg text-center rounded p-5 text-white"
              disabled={currentPage <= 1}
            >
              {"<"} Previous
            </button>
            <button
              onClick={handleNextPage}
              className="w-full bg-blue-500 hover:bg-blue-700 disabled:opacity-50 text-lg text-center rounded p-5 text-white"
              disabled={currentPage >= totalPage}
            >
              Next {">"}
            </button>
          </div>
        </div>
      )}

      <ContributorInfo
        username="baycak"
        profilePic="https://avatars.githubusercontent.com/u/13051657?v=4"
      />
      <ApiInfo
        apiUrl="https://developers.themoviedb.org/3/getting-started/introduction"
        apiName="Movies API"
      />
    </div>
  );
};

export default Movies;
