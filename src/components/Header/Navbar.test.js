import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

test("Navbar renders correctly", () => {
  const { debug, container } = render(<Navbar />);

  screen.debug();
  expect(screen.getByTestId("navbarlinkhome")).toHaveTextContent("Lost Fm");
});
