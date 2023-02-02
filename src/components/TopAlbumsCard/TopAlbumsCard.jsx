import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TopArtistContext } from "../../context/TopArtistContext";

const TopAlbumsCard = () => {
  const { topAlbum, getTopAlbumArtist } = useContext(TopArtistContext);
  const { state } = useLocation();
  console.log(state);
  console.log(topAlbum);

  useEffect(() => {
    getTopAlbumArtist(state.name);
  }, []);

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
            <div key={artist.listeners} className="card mt-3">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img src={artist.image[2]["#text"]} alt={artist.name} />
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="card-block row">
                    <div className="col-md-6 mt-4">
                      <h4>{artist.name}</h4>
                    </div>
                    <div className="col-md-6 mt-5">
                      <li style={{ listStyleType: "none" }}>
                        {artist.playcount} plays
                      </li>
                    </div>
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
