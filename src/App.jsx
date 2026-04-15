import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/Landing/LandingPage";

export default function App() {
  return (
    <div className="font-dm">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
