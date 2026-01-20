import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/SectionExperience'; // Capitalized E

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} /> {/* Capitalized tag */}
      </Routes>
    </Router>
  );
}

export default App;