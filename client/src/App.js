import './App.css';
import NavBar from './components/navBar/NavBar';
import ActionBar from './components/actionBar/ActionBar';
import FooterBar from './components/footerBar/FooterBar';
import Card from './components/card/Card';
import Board from './components/board/Board';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ActionBar />
      <Board />
      <FooterBar />

    </div>
  );
}

export default App;
