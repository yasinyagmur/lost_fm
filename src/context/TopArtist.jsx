import axios from "axios";
import React from "react";
import { useState, useEffect, createContext } from "react";

export const TopArtistContext = createContext();

export const TopArtistProvider = ({ children }) => {
  const [allArtistList, setAllArtistList] = useState({
    loading: true,
    data: [],
  });

  const API_KEY = process.env.REACT_APP_apiKey;
  const FEATURED_API = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
  const getTopArtist = async () => {
    try {
      const { data } = await axios.get(FEATURED_API);
      //   setAllArtistList(data.artists.artist);
      setAllArtistList({ loading: false, data: data.artists.artist });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopArtist();
  }, []);
  return (
    <TopArtistContext.Provider value={{ allArtistList }}>
      {children}
    </TopArtistContext.Provider>
  );
};
