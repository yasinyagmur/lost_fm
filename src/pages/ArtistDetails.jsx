import React from "react";
import TopAlbumsCard from "../components/TopAlbumsCard/TopAlbumsCard";
import { TopArtistHead } from "../components/TopArtist/TopArtistHead";
import TopTracksCard from "../components/TopTracksCard/TopTracksCard";

const ArtistDetails = () => {
  return (
    <div className="container" style={{ marginTop: "7rem" }}>
      <TopArtistHead />
      <div className="row">
        <div className="col-md-6">
          <TopAlbumsCard />
        </div>
        <div className="col-md-6">
          <TopTracksCard />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
