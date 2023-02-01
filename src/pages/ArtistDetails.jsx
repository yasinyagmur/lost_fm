import React from "react";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TopArtistContext } from "../context/TopArtist";

const ArtistDetails = () => {
  const { state } = useLocation();

  console.log(state);
  const { topTrack, getTopTrack } = useContext(TopArtistContext);
  console.log(topTrack.data);

  useEffect(() => {
    getTopTrack(state.name);
  }, []);

  return (
    <div
      className="text-center m-3 border border-black radius-2 p-5"
      style={{ marginTop: "7rem" }}
    >
      <h1>{state.name}</h1>
    </div>
  );
};

export default ArtistDetails;
