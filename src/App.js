import { ThemeChangeProvider } from "./context/ThemeChangeContext";
import { TopArtistProvider } from "./context/TopArtistContext";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div>
      <ThemeChangeProvider>
        <TopArtistProvider>
          <AppRouter />
        </TopArtistProvider>
      </ThemeChangeProvider>
    </div>
  );
}

export default App;
