import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import ArtistDetails from "../pages/ArtistDetails";
import HomePage from "../pages/HomePage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<ArtistDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
