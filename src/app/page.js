import Image from "next/image";
import SideBar from "./Components/SideBar";
import Tabbing from "./Components/Tabbing";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <Tabbing/>
    </div>
  );
}
