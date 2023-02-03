import { useContext } from "react";
import { ThemeChangeContext } from "./context/ThemeChangeContext";
import { TopArtistProvider } from "./context/TopArtistContext";
import AppRouter from "./router/AppRouter";
function App() {
  const { themeMode } = useContext(ThemeChangeContext);

  return (
    <div style={themeMode}>
      <TopArtistProvider>
        <AppRouter />
      </TopArtistProvider>
    </div>
  );
}

export default App;
