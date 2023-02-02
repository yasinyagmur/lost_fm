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
  const [topAlbum, setTopAlbum] = useState({
    loading: true,
    data: [],
  });
  const API_KEY = process.env.REACT_APP_apiKey;
  const TopArtistList_API = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
  console.log(TopArtistList_API);

  const getTopAlbumArtist = async (name) => {
    console.log(name);
    const TopAlbumForArtist_API = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
    try {
      const { data } = await axios.get(TopAlbumForArtist_API);
      console.log(data);
      setTopAlbum({ loading: false, data: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTrack = async (name) => {
    console.log(name);
    const TopTrack_API = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

    console.log(TopTrack_API);

    try {
      const { data } = await axios.get(TopTrack_API);
      console.log(data);
      setTopTrack({ loading: false, data: data.toptracks.track });
    } catch (error) {
      console.log(error);
    }
  };

  const getTopArtist = async () => {
    try {
      const { data } = await axios.get(TopArtistList_API);
      setAllArtistList({ loading: false, data: data.artists.artist });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopArtist();
    getTopTrack();
    getTopAlbumArtist();
  }, []);

  return (
    <TopArtistContext.Provider
      value={{
        allArtistList,
        topTrack,
        getTopTrack,
        getTopAlbumArtist,
        topAlbum,
      }}
    >
      {children}
    </TopArtistContext.Provider>
  );
};
