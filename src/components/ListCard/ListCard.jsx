import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { useFetchTopArtists } from "../../infiniteQuery/useFetchTopArtist";
import "./ListCard.css";
const ListCard = () => {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage } = useFetchTopArtists();
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);
  const { themeMode } = useContext(ThemeChangeContext);

  return (
    <div className="container  w-50 " style={{ paddingTop: "7rem" }}>
      {data?.pages?.map((page) =>
        page?.artists?.artist?.map((artist, index) => {
          return (
            <div
              className="card card-list h-100 mb-2 shadow p-3 mb-5 bg-body-tertiary rounded"
              key={index}
              style={themeMode}
              onClick={() => {
                navigate("/details/" + artist.name, {
                  state: artist,
                  replace: false,
                });
              }}
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
                    <p
                      className="text-center "
                      style={{ borderBottom: "2px solid gray" }}
                    >
                      Artist
                    </p>
                    <h5 className="card-title">{artist.name}</h5>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-5">
                  <div className="card-body">
                    <p className="card-text">playcount:{artist.playcount}</p>
                    <p className="card-text">listeners:{artist.listeners}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListCard;
