import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Homepage from './pages/Homepage/Homepage.js'
import Films from './pages/Films/Films.js'
import Characters from './pages/Characters/Characters.js';
import Trailers from './pages/Trailer/Trailers.js'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/films" element={<Films />}></Route>
          <Route exact path="/trailers" element={<Trailers />}></Route>
          <Route exact path="/characters" element={<Characters />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
