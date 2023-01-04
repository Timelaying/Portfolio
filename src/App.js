import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import LandingPage from './components/LandingPage';
import './components/theStyleSheet.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
