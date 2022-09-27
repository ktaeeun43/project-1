
import "../src/App.css";
import Header from "./layout/Header";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Life from "./pages/life/Life";
import Market from "./pages/market/Market";
import News from "./pages/news/News";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/life" element={<Life />}></Route>
            <Route path="/market" element={<Market />}></Route>
            <Route path="/news" element={<News />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
