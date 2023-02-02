import { useInfiniteQuery } from "react-query";

const API_KEY = process.env.REACT_APP_apiKey;

const fetchTopArtists = async ({ pageParam = 1 }) => {
  try {
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&page=${pageParam}&limit=7`;
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const useFetchTopArtists = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["topartists"], fetchTopArtists, {
    getNextPageParam: (lastPage) => {
      return Number(lastPage?.artists?.["@attr"].page + 1);
    },
  });
  return {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  };
};
