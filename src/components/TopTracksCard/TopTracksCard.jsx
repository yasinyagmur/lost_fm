import React, { useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TopArtistContext } from "../../context/TopArtistContext";

const TopTracksCard = () => {
  const { topTrack, getTopTrack } = useContext(TopArtistContext);
  const { state } = useLocation();
  console.log(state);
  console.log(topTrack);

  useEffect(() => {
    getTopTrack(state.name);
  }, []);

  if (topTrack.loading) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger text-center">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <h3 style={{ borderBottom: "1px solid gray", paddingBottom: "1rem" }}>
          Top Tracks
        </h3>
        {topTrack.data?.map((artist) => {
          return (
            <div class="card h-100 mb-2">
              <div class="row no-gutters">
                <div class="col-md-4 col-sm-12">
                  <img
                    src={artist.image[2]["#text"]}
                    alt={artist.name}
                    class="card-img"
                  />
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="card-body">
                    <h5 class="card-title">{artist.name}</h5>
                    <p class="card-text">{state.name}</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="card-body">
                    <p class="card-text">Playcount:{artist.playcount}</p>
                    <p class="card-text">Listeners:{artist.listeners}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default TopTracksCard;
