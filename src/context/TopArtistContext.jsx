import axios from "axios";
import React from "react";
import { useState, useEffect, createContext } from "react";

export const TopArtistContext = createContext();

export const TopArtistProvider = ({ children }) => {
  const [allArtistList, setAllArtistList] = useState({
    loading: true,
    data: [],
  });

  const [topTrack, setTopTrack] = useState({
    loading: true,
    data: [],
  });

  const API_KEY = process.env.REACT_APP_apiKey;
  const TopArtist_API = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
  console.log(TopArtist_API);

  const getTopTrack = async (name) => {
    console.log(name);
    const TopTrack_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

    console.log(TopTrack_API);

    try {
      const { data } = await axios.get(TopTrack_API);
      console.log(data);
      setTopTrack({ loading: false, data: data.tracks.track });
    } catch (error) {
      console.log(error);
    }
  };

  const getTopArtist = async () => {
    try {
      const { data } = await axios.get(TopArtist_API);
      setAllArtistList({ loading: false, data: data.artists.artist });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopArtist();
    getTopTrack();
  }, []);
  return (
    <TopArtistContext.Provider value={{ allArtistList, topTrack, getTopTrack }}>
      {children}
    </TopArtistContext.Provider>
  );
};
