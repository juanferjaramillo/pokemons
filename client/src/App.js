import "./App.css";
import CreateForm from "./components/createFrom/CreateForm";
import BoardPage from "./components/pages/BoardPage";
import CreatePage from "./components/pages/CreatePage";
import DetailPage from "./components/pages/DetailPage";
import SplashPage from "./components/pages/SplashPage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  //const url = useLocation().pathname;
  return (

    <div>
      <Routes>
        <Route path={'/'} element={<SplashPage />}> </Route>
        <Route path={'/pokemon'} element={<BoardPage />}> </Route>
        <Route path={'/pokemon/create'} element={<CreatePage />}></Route>
        <Route path={'/detail/:id'} element={<DetailPage />}> </Route>
       
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
