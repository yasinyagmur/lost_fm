import { BrowserRouter } from "react-router-dom";
import Card from "../components/Card/Card";
import { ThemeChangeProvider } from "../context/ThemeChangeContext";
import { TopArtistProvider } from "../context/TopArtistContext";
export default {
  title: "Components",
  args: {},
  components: Card,
};
const Template = (args) => {
  return (
    <BrowserRouter>
      <ThemeChangeProvider>
        <TopArtistProvider>
          <Card {...args} />
        </TopArtistProvider>
      </ThemeChangeProvider>
    </BrowserRouter>
  );
};
export const AlbumCard = Template.bind({});
AlbumCard.args = {
  title: "topAlbum",
  name: "Taylor Swift",
};
export const TrackCard = Template.bind({});
TrackCard.args = {
  title: "topTracks",
  name: "Taylor Swift",
};
