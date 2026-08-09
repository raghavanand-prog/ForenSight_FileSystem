import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import System from "./pages/System";
import Report from "./pages/Report";
import FileInfo from "./pages/FileInfo";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/system" element={<System />} />

        <Route path="/report" element={<Report />} />

        <Route path="/file" element={<FileInfo />} />

        <Route path="/about" element={<About />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;