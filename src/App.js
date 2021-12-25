
import { Route, Routes } from 'react-router';
import './App.css';
import AllCards from './pages/AllCards/AllCards';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/battle" element={<Game/>} />
        <Route path="/guide" element={<AllCards/>} />
      </Routes>
    </div>
  );
}

export default App;
