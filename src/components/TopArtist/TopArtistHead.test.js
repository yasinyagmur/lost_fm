import React from "react";
import { render, screen } from "@testing-library/react";
import { TopArtistHead } from "./TopArtistHead";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { TopArtistContext } from "../../context/TopArtistContext";
import { MemoryRouter } from "react-router-dom";

describe("TopArtistHead component tests", () => {
  it("renders loading component correctly", () => {
    render(
      <MemoryRouter>
        <TopArtistContext.Provider value={{ topTrack: { loading: true } }}>
          <ThemeChangeContext.Provider value={{ themeMode: {} }}>
            <TopArtistHead />
          </ThemeChangeContext.Provider>
        </TopArtistContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByAltText("loading")).toBeInTheDocument();
  });

  it("renders correctly with state data", () => {
    render(
      <MemoryRouter
        initialEntries={[
          { name: "John Doe", image: [{ "#text": "image.jpg" }] },
        ]}
      >
        <TopArtistContext.Provider value={{ topTrack: { loading: false } }}>
          <ThemeChangeContext.Provider value={{ themeMode: {} }}>
            <TopArtistHead />
          </ThemeChangeContext.Provider>
        </TopArtistContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
