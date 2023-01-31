import axios from "axios";
import { useState, useEffect } from "react";

const ListCard = () => {
  const [artistList, setArtistList] = useState();
  console.log(artistList);
  const API_KEY = process.env.REACT_APP_apiKey;
  const FEATURED_API = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=jso`;

  const getTopArtist = async () => {
    try {
      const { data } = await axios.get(FEATURED_API);
      setArtistList(data);
    } catch (error) {}
  };

  useEffect(() => {
    getTopArtist();
  }, []);

  return (
    <div className="container mt-5 w-50">
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/150" alt="" srcset="" />
          </div>
          <div className="col-md-8">
            <div className="card-block row">
              <div className="col-md-6">
                <h6>Artist</h6>
                <h4>ArtistName</h4>
              </div>
              <div className="col-md-6 mt-4">
                <li>listeners:</li>
                <li>playcount</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
