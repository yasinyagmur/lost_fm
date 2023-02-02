import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TopArtistContext } from "../../context/TopArtistContext";

export const TopArtistHead = () => {
  const { topTrack, getTopTrack } = useContext(TopArtistContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

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
      <div
        className="container mt-5  bg-light"
        style={{ border: "2px solid gray", borderRadius: "10px" }}
      >
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img
              style={{ marginLeft: "-1rem", borderRadius: "10px 0 0 10px" }}
              src={state.image[2]["#text"]}
              alt={state.name}
            />
          </div>
          <div className="col-md-8  ">
            <h4 className="text-left mt-5">{state.name}</h4>
          </div>
        </div>
      </div>
    );
  }
};
