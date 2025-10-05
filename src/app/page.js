import Image from "next/image";
import Navbar from "./components/Navbar";
import Home_Banner from "./components/Home_Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Home_Banner></Home_Banner>
    </div>
  );
}
