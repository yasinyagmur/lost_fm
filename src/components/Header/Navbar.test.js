import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("Navbar renders correctly", () => {
  const { debug, container } = render(<Navbar />);
  screen.debug();
});
