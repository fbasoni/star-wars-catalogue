import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Homepage from './pages/Homepage.js'
import Catalogue from './pages/Catalogue.js'


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/Catalogue" element={<Catalogue />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
