import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { TopArtistContext } from "../../context/TopArtistContext";

const TopAlbumsCard = () => {
  const { topAlbum, getTopAlbumArtist } = useContext(TopArtistContext);
  const { state } = useLocation();
  console.log(state);
  console.log(topAlbum);

  useEffect(() => {
    getTopAlbumArtist(state.name);
  }, []);

  const { themeMode } = useContext(ThemeChangeContext);

  if (topAlbum.loading) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger text-center">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <h3 style={{ borderBottom: "1px solid gray", paddingBottom: "1rem" }}>
          Top Abums
        </h3>
        {topAlbum.data.topalbums.album?.map((artist) => {
          return (
            <div class="card h-100 mb-2" style={themeMode}>
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
                    <p class="card-text mt-4">{artist.playcount} play</p>
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

export default TopAlbumsCard;
