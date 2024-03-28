import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SellerRegistrationPage from "./pages/SellerRegistrationPage";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/seller-registration-page"
          element={<SellerRegistrationPage />}
        />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
