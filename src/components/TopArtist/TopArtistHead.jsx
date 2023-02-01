import React, { useContext } from "react";
import { TopArtistContext } from "../../context/TopArtistContext";

export const TopArtistHead = () => {
  const { topTrack } = useContext(TopArtistContext);
  console.log(topTrack);

  if (topTrack.loading) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger text-center">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 w-50 ">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src="" alt="" />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-block row">
              <div className="col-md-6 mt-3">
                <h6>Artist</h6>
                <h4></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
