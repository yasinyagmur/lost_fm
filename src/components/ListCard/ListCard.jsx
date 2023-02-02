import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TopArtistContext } from "../../context/TopArtistContext";

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
              class="card h-100 mb-2"
              key={artist.listeners}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/details/" + artist.name, {
                  state: artist,
                  replace: false,
                });
              }}
            >
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
                    <p
                      className="text-center"
                      style={{ borderBottom: "2px solid gray" }}
                    >
                      Artist
                    </p>
                    <h5 class="card-title">{artist.name}</h5>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mt-5">
                  <div class="card-body">
                    <p class="card-text">playcount:{artist.playcount}</p>
                    <p class="card-text">listeners:{artist.listeners}</p>
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
