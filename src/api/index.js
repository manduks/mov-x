import { useState, useEffect } from 'react';
import config from './config';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export function get(path, { headers } = {}) {
  return fetch(proxyUrl + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then(response => {
      if (response.status > 500) {
        return Promise.reject(response);
      }

      // return empty json object in no-content responses
      if (response.status === 204) {
        return {};
      }

      // here we assume it's json
      return response.json();
    })
    .then(json => {
      if (Array.isArray(json.errors)) {
        return Promise.reject({
          ...json,
        });
      } else if (json.message && json.message.code !== 200) {
        return Promise.reject({
          error: json.message,
        });
      }

      return Promise.resolve(json);
    })
    .catch(response => {
      return Promise.reject(response);
    });
}

export function useTheMovieDBApi() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('discover');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await get(
          query ? `${config.search}${query}` : config.discover,
        );
        setMovies(response.results);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    }

    fetchMovies();
  }, [query]);

  return [{ movies, isLoading, isError }, setQuery];
}
