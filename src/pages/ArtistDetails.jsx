import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import { TopArtistHead } from "../components/TopArtist/TopArtistHead";

const ArtistDetails = () => {
  const { state } = useLocation();

  return (
    <div className="container" style={{ paddingTop: "7rem" }}>
      <TopArtistHead />
      <div className="row">
        <div className="col-md-6">
          <Card title="topAlbum" name={state.name} />
        </div>
        <div className="col-md-6">
          <Card title="topTracks" name={state.name} />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
