import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Screen/main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
