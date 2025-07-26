import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Letters from './pages/Letters.jsx';
import Ideas from './pages/Ideas.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/ideas" element={<Ideas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
