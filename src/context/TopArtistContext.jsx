import axios from "axios";
import React from "react";
import { useState, createContext } from "react";

export const TopArtistContext = createContext();

export const TopArtistProvider = ({ children }) => {
  const [artistAlbums, setArtistAlbums] = useState({
    loading: true,
    data: [],
  });

  const [topTrack, setTopTrack] = useState({
    loading: true,
    data: [],
  });

  const API_KEY = process.env.REACT_APP_apiKey;

  const getTopAlbumArtist = async (name) => {
    console.log(name);
    const TopAlbumForArtist_API = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
    try {
      const { data } = await axios.get(TopAlbumForArtist_API);
      console.log("album", data);
      setArtistAlbums({ loading: false, data: data.topalbums.album });
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTrack = async (name) => {
    console.log(name);
    const TopTrack_API = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

    console.log(TopTrack_API);

    try {
      const { data } = await axios.get(TopTrack_API);
      console.log("track", data);
      setTopTrack({ loading: false, data: data.toptracks.track });
    } catch (error) {
      console.log(error);
    }
  };

  // const TopArtistList_API = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

  // const getTopArtist = async () => {
  //   try {
  //     const { data } = await axios.get(TopArtistList_API);
  //     setAllArtistList({ loading: false, data: data.artists.artist });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getTopArtist();
  //   getTopTrack();
  //   getTopAlbumArtist();
  // }, []);

  return (
    <TopArtistContext.Provider
      value={{
        artistAlbums,
        topTrack,
        getTopTrack,
        getTopAlbumArtist,
      }}
    >
      {children}
    </TopArtistContext.Provider>
  );
};
