import { createContext, useEffect, useState } from "react";

export const ThemeChangeContext = createContext();
export const ThemeChangeProvider = ({ children }) => {
  const theme = {
    dark: {
      color: "white",
      backgroundColor: "#4d4c4c",
    },
    light: {
      color: "black",
      backgroundColor: "#FFFFFF",
    },
  };
  const [themeMode, setThemeMode] = useState(theme.dark);
  const [click, setClick] = useState();
  console.log(click);

  const Change = () => {
    if (!click) {
      setThemeMode(theme.light);
    } else {
      setThemeMode(theme.dark);
    }
  };

  useEffect(() => {
    Change();
  }, [click]);

  return (
    <ThemeChangeContext.Provider value={{ setClick, themeMode }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};
