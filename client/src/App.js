import "./App.css";
import BoardPage from "./components/pages/BoardPage";
import CreatePage from "./components/pages/CreatePage";
import DetailPage from "./components/pages/DetailPage";
import BackPage from "./components/pages/BackPage";
import SplashPage from "./components/pages/SplashPage";
import AboutPage from "./components/pages/AboutPage";
import { Route, Routes } from "react-router-dom";

function App() {
  //const url = useLocation().pathname;
  return (
    <div>
      <Routes>
        <Route  exact path={"/"} element={<SplashPage />}>
          {" "}
        </Route>

        <Route  exact path={'/pokemon'} element={<BoardPage />}> </Route>
        <Route exact path={"/pokemon/create"} element={<CreatePage />}></Route>
        <Route exact path={"/about"} element={<AboutPage />}></Route>
        <Route exact path={"/detail/:name"} element={<DetailPage />}></Route>
        <Route exact path={"/board"} element={<BackPage />}></Route>
      </Routes>
    </div>

    // <div className="App">
    //   {url === "/" ? <SplashPage /> : null}
    //   {url === "/pokemon" ? <BoardPage /> : null}
    //   {url === "/detail" ? <DetailPage /> : null}
    // </div>
  );
}

export default App;
