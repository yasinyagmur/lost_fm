import { createContext, useEffect, useState } from "react";

export const ThemeChangeContext = createContext();
export const ThemeChangeProvider = ({ children }) => {
  const theme = {
    dark: {
      color: "white",
      backgroundColor: "#6d6c6c",
    },
    light: {
      color: "black",
      backgroundColor: "#FFFFFF",
    },
  };

  const [themeMode, setThemeMode] = useState(theme.dark);
  const [click, setClick] = useState();
  // console.log(click);

  useEffect(() => {
    const Change = () => {
      if (!click) {
        setThemeMode(theme.light);
      } else {
        setThemeMode(theme.dark);
      }
    };

    Change();
  }, [click]);

  return (
    <ThemeChangeContext.Provider value={{ setClick, themeMode }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};
