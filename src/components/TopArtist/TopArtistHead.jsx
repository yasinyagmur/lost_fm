import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TopArtistContext } from "../../context/TopArtistContext";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";

export const TopArtistHead = () => {
  const { topTrack, getTopTrack } = useContext(TopArtistContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    getTopTrack(state.name);
  }, []);
  const { themeMode } = useContext(ThemeChangeContext);

  if (topTrack.loading) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger text-center">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div class="card" style={themeMode}>
        <div class="row no-gutters">
          <div class="col-md-4 col-sm-12">
            <img
              src={state.image[2]["#text"]}
              alt={state.name}
              class="card-img"
              style={{ maxWidth: "20vh" }}
            />
          </div>
          <div class="col-md-8 col-sm-12">
            <div class="card-body">
              <h3 class="card-title">{state.name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
