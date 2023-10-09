import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Screen/main";
import Seta from "./Screen/setGame/setA";
import Setb from "./Screen/setGame/setB";
import Ingame from "./Screen/inGame";
import SetTime from "./Screen/setGame/setTime";
import Result from "./Screen/Result";
import SetPass from "./Screen/setGame/setPass";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seta" element={<Seta />} />
        <Route path="/setb" element={<Setb />} />
        <Route path="/settime" element={<SetTime />} />
        <Route path="/setpass" element={<SetPass />} />
        <Route path="/ingame" element={<Ingame />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
