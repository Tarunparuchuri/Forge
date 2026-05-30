import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import VoiceFlowProduct from './pages/VoiceFlowProduct';
import About from './pages/About';
import Ideas from './pages/Ideas';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isVoiceFlowPage = location.pathname === '/products/voiceflow';

  return (
    <div className="app">
      <ScrollToTop />
      {/* Show global background only on non-VoiceFlow pages */}
      {!isVoiceFlowPage && <Background />}
      
      {!isVoiceFlowPage && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Services />} />
          <Route path="/products/voiceflow" element={<VoiceFlowProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </main>
      
      {!isVoiceFlowPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
