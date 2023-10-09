import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Screen/main";
import Seta from "./Screen/setGame/setA";
import Setb from "./Screen/setGame/setB";
import Ingame from "./Screen/inGame";
import SetTime from "./Screen/setGame/setTime";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seta" element={<Seta />} />
        <Route path="/setb" element={<Setb />} />
        <Route path="/settime" element={<SetTime />} />
        <Route path="/ingame" element={<Ingame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
