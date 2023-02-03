import React, { useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { TopArtistContext } from "../../context/TopArtistContext";

const Card = ({ title, name }) => {
  const { topTrack, getTopAlbumArtist, getTopTrack, artistAlbums } =
    useContext(TopArtistContext);
  console.log(" artıst albums", artistAlbums);
  console.log(" artıst Track", topTrack);
  const { state } = useLocation();
  //   console.log(state);
  //   console.log(topTrack);

  useEffect(() => {
    title === "topTracks" ? getTopTrack(name) : getTopAlbumArtist(name);
  }, []);
  const { themeMode } = useContext(ThemeChangeContext);

  if (title === "topTracks" ? topTrack.loading : artistAlbums.loading) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger text-center">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <h3 style={{ borderBottom: "1px solid gray", paddingBottom: "1rem" }}>
          {title === "topTracks" ? "Top Tracks" : "Top Albums"}
        </h3>
        {title == "topTracks" ? (
          <div>
            {topTrack.data?.map((artist, index) => {
              return (
                <div key={index} class="card h-100 mb-2" style={themeMode}>
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
                        <p class="card-text">{name}</p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <div class="card-body">
                        <p class="card-text">Playcount:{artist.playcount}</p>
                        {title === "topTracks" && (
                          <p class="card-text">Listeners:{artist.listeners}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {artistAlbums.data?.map((artist, index) => {
              return (
                <div key={index} class="card h-100 mb-2" style={themeMode}>
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
                        <p class="card-text">{name}</p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <div class="card-body">
                        <p class="card-text">Playcount:{artist.playcount}</p>
                        {title === "topTracks" && (
                          <p class="card-text">Listeners:{artist.listeners}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default Card;
