import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import spaceImage from "../assets/space_image.jpg";

export default function Layout() {
  return (
    <div
      className="min-h-screen relative overflow-hidden bg-[#050816] bg-cover bg-center"
      style={{ backgroundImage: `url(${spaceImage})` }}
    >
      <div className="absolute inset-0 z-0 bg-[#050816]/80" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.25),transparent_55%)] opacity-80" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(170,59,255,0.18),transparent_50%)] opacity-70" />

      <div className="relative z-10">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

