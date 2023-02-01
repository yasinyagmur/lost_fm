import React from "react";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TopArtistContext } from "../../context/TopArtistContext";

const TopTracksCard = () => {
  const { state } = useLocation();
  console.log(state);

  const { topTrack, getTopTrack } = useContext(TopArtistContext);
  console.log(topTrack.data);

  useEffect(() => {
    getTopTrack(state.name);
  }, []);

  return <div>{state.name}</div>;
};

export default TopTracksCard;
