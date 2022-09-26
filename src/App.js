import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    </>
  );
}

export default App;
