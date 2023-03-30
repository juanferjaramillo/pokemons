import "./App.css";
import BoardPage from "./components/pages/BoardPage";
import DetailPage from "./components/pages/DetailPage";
import SplashPage from "./components/pages/SplashPage";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const url = useLocation().pathname
  return (
    <div className="App">
      {url === '/' ?  <SplashPage /> : null}
      {url === '/pokemon' ? <BoardPage /> : null }
      {url === '/detail' ? <DetailPage /> : null } 
    </div>
  );
}

export default App;
