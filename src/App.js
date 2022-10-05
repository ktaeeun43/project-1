
import "../src/App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Life from "./pages/Life";
import Market from "./pages/Market";
import News from "./pages/News";



function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Nav />
          <Routes>
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
