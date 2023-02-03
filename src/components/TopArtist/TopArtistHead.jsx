import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TopArtistContext } from "../../context/TopArtistContext";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import loading from "../../assets/loading.gif";
export const TopArtistHead = () => {
  const { topTrack, getTopTrack } = useContext(TopArtistContext);
  const { state } = useLocation();
  // console.log(state);

  useEffect(() => {
    getTopTrack(state.name);
  }, []);
  const { themeMode } = useContext(ThemeChangeContext);

  if (topTrack.loading) {
    return (
      <div className="container mt-5">
        <img className="w-50" src={loading} alt="loading" />
      </div>
    );
  } else {
    return (
      <div
        className="card shadow p-3 mb-5 bg-body-tertiary rounded"
        style={themeMode}
      >
        <div className="row no-gutters">
          <div className="col-md-4 col-sm-12">
            <img
              src={state.image[2]["#text"]}
              alt={state.name}
              className="card-img"
              style={{ maxWidth: "20vh" }}
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-body">
              <h3 className="card-title">{state.name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
