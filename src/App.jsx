import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Time from './Time';
import ArrObj from './ArrObj';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Time" element={<Time />} />
          <Route path="/ArrObj" element={<ArrObj />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
