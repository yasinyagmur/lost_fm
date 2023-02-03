import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { useFetchTopArtists } from "../../infiniteQuery/useFetchTopArtist";

const ListCard = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchTopArtists();

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
    <div className="container  w-50 " style={{ marginTop: "7rem" }}>
      {data?.pages?.map((page) =>
        page?.artists?.artist?.map((artist, index) => {
          return (
            <div
              class="card h-100 mb-2"
              key={index}
              style={themeMode}
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
        })
      )}
    </div>
  );
};

export default ListCard;
