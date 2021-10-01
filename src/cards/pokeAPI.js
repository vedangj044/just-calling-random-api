import React, { useEffect, useState } from 'react';
import ContributorInfo from '../components/contributorInfo';
import ApiInfo from '../components/apiInfo';

export default function RandomAdvice(props) {
  const [pokemon, setPokemon] = useState({});
  const [pokeName, setPokeName] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(200);
  const [suggestions, setSuggestions] = useState([]);

  const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    fetch(`${pokeApiUrl}/?limit=9`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data.results));
  }, []);

  const setLocalEntry = (url, payload) =>localStorage.setItem(url, JSON.stringify(payload));
  const getLocalEntry = (url) => JSON.parse(localStorage.getItem(url));

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const url = `${pokeApiUrl}/${pokeName.toLowerCase()}`;
      const localEntry = getLocalEntry(url);
      if (localEntry) {
        return setPokemon(localEntry);
      }
      const response = await fetch(url);
      setStatus(response.status);

      const data = await response.json();
      setLocalEntry(url, data);
      setPokemon(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const capitalize = (string) => {
    if (string) {
      return string
        .charAt(0)
        .toUpperCase()
        .concat(
          string
            .split('')
            .splice(1, string.length - 1)
            .join('')
        );
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4"
    >
      <h1 className="text-xl py-2">Pokemon API</h1>
      <input
        required
        aria-required
        className="rounded-l-md border border-purple-900 px-4 py-2"
        placeholder="Search for a pokemon ..."
        onChange={(ev) => setPokeName(ev.target.value)}
        list="pokemon"
      />
      <datalist id="pokemon">
        {suggestions.map((suggestion) => (
          <option value={suggestion.name}></option>
        ))}
      </datalist>
      <input
        disabled={loading}
        aria-disabled={loading}
        className="rounded-r-md border border-purple-900 bg-purple-900 text-white px-4 py-2 cursor-pointer"
        type="submit"
        value="Start searching"
      />

      {pokemon && status >= 200 && status < 300 ? (
        <section className="flex flex-col md:flex-row pt-2 pb-2">
          <img
            className="sm:m-auto md:m-0"
            src={
              pokemon.sprites
                ? pokemon.sprites.front_default
                : 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png'
            }
            height="120"
            width="120"
          />
          <div>
            <h1 className="text-2xl font-medium pt-3 pb-3">
              {pokemon.name ? capitalize(pokemon.name) : "Gotta catch 'em all"}
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pokemon.stats
                ? pokemon.stats.map((entry, index) => (
                    <li className="bg-purple-200 px-2 py-1 text-center rounded-full">
                      {capitalize(entry.stat.name)}: {entry.base_stat}
                    </li>
                  ))
                : ''}
            </ul>
          </div>
        </section>
      ) : (
        <p>Something went wrong: {status}</p>
      )}

      <ContributorInfo
        username="tq-bit"
        profilePic="https://avatars.githubusercontent.com/u/69204418?v=4"
      />
      <ApiInfo apiUrl="https://pokeapi.co/" apiName="Pokemon API" />
    </form>
  );
}
