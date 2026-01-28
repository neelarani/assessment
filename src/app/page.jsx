import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}
