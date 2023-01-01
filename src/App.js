import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Homepage from './pages/Homepage/Homepage.js'
import Catalogue from './pages/Catalogue/Catalogue.js'
import Trailers from './pages/Trailer/Trailers.js'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/catalogue" element={<Catalogue />}></Route>
          <Route exact path="/trailers" element={<Trailers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
