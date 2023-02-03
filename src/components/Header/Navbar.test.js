import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { ThemeChangeContext } from "../context/ThemeChangeContext";

describe("Navbar component", () => {
  test("Link elements should render correctly", () => {
    const { getByTestId } = render(<Navbar />);

    const homeLink = getByTestId("navbarlinkhome");
    const githubLink = getByTestId("navbarlinkgithub");
    const linkedinLink = getByTestId("navbarlinklinkedin");

    expect(homeLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  test("Düğme tıklandığında temalar doğru şekilde değişmelidir", () => {
    const mockSetClick = jest.fn();
    const theme = { backgroundColor: "black" };

    const { getByText } = render(
      <ThemeChangeContext.Provider
        value={{ setClick: mockSetClick, themeMode: theme }}
      >
        <Navbar />
      </ThemeChangeContext.Provider>
    );

    const button = getByText("Dark");
    fireEvent.click(button);
    expect(mockSetClick).toHaveBeenCalled();
  });
});
