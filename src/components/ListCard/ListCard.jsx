import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TopArtistContext } from "../../context/TopArtist";

const ListCard = () => {
  const navigate = useNavigate();
  const { allArtistList } = useContext(TopArtistContext);
  console.log(allArtistList);

  if (allArtistList.loading) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger text-center">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 w-50 ">
        {allArtistList.data?.map((artist) => {
          return (
            <div
              className="card mt-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/details/" + artist.mbid, {
                  state: artist,
                  replace: false,
                });
              }}
            >
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img src={artist.image[2]["#text"]} alt={artist.name} />
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="card-block row">
                    <div className="col-md-6 mt-3">
                      <h6>Artist</h6>
                      <h4>{artist.name}</h4>
                    </div>
                    <div className="col-md-6 mt-4">
                      <li>listeners:{artist.listeners}</li>
                      <li>playcount:{artist.playcount}</li>
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

export default ListCard;
