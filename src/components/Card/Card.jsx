import React, { useEffect } from "react";
import { useContext } from "react";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { TopArtistContext } from "../../context/TopArtistContext";
import loading from "../../assets/loading.gif";
const Card = ({ title, name }) => {
  const { topTrack, getTopAlbumArtist, getTopTrack, artistAlbums } =
    useContext(TopArtistContext);
  // console.log(" artıst albums", artistAlbums);
  // console.log(" artıst Track", topTrack);
  //   console.log(topTrack);
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  useEffect(() => {
    title === "topTracks" ? getTopTrack(name) : getTopAlbumArtist(name);
  }, []);
  const { themeMode } = useContext(ThemeChangeContext);

  if (title === "topTracks" ? topTrack.loading : artistAlbums.loading) {
    return (
      <div className="container mt-5">
        <img className="w-50" src={loading} alt="loading" />
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <h3 style={{ borderBottom: "1px solid gray", paddingBottom: "1rem" }}>
          {title === "topTracks" ? "Top Tracks" : "Top Albums"}
        </h3>
        {title === "topTracks" ? (
          <div>
            {topTrack.data?.map((artist, index) => {
              return (
                <div
                  key={index}
                  className="card h-100 mb-2 shadow p-3 mb-5 bg-body-tertiary rounded"
                  style={themeMode}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-12">
                      <img
                        src={
                          artist.image[2]["#text"]
                            ? artist.image[2]["#text"]
                            : defaultImage
                        }
                        alt={artist.name}
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text">{name}</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="card-body">
                        <p className="card-text">
                          Playcount:{artist.playcount}
                        </p>
                        {title === "topTracks" && (
                          <p className="card-text">
                            Listeners:{artist.listeners}
                          </p>
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
                <div
                  key={index}
                  className="card h-100 mb-2 shadow p-3 mb-5 bg-body-tertiary rounded"
                  style={themeMode}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-12">
                      <img
                        src={
                          artist.image[2]["#text"]
                            ? artist.image[2]["#text"]
                            : defaultImage
                        }
                        alt={artist.name}
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text">{name}</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="card-body">
                        <p className="card-text">
                          Playcount:{artist.playcount}
                        </p>
                        {title === "topTracks" && (
                          <p className="card-text">
                            Listeners:{artist.listeners}
                          </p>
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
