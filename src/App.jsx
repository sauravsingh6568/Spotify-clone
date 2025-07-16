import { useState } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <div className="flex h-screen p-2 bg-black text-white overflow-hidden font-[Montserrat]">
      <Sidebar />
      <MainContent />
      <MusicPlayer />
    </div>
  );
};

export default App;
