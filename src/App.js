
import HomePage from './Pages/HomePage/HomePage';
import HeaderSlider from './Components/HeaderSlider/HeaderSlider';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
