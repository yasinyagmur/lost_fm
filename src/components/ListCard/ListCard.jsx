import { useContext } from "react";
import { TopArtistContext } from "../../context/TopArtist";

const ListCard = () => {
  const { allArtistList } = useContext(TopArtistContext);
  console.log(allArtistList);

  return (
    <div className="container mt-5 w-50">
      <div className="card">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-block row">
              <div className="col-md-6">
                <h6>Artist</h6>
                <h4>ArtistName</h4>
              </div>
              <div className="col-md-6 mt-4">
                <li>listeners:</li>
                <li>playcount:</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
