import "./App.css";
import { TopArtistProvider } from "./context/TopArtist";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div>
      <TopArtistProvider>
        <AppRouter />
      </TopArtistProvider>
    </div>
  );
}

export default App;
