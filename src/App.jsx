import { useState, useEffect } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Welcome />
      <Courses />
      <AboutUs />
      <Contact />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#D84C00] hover:bg-[#C24200] text-white p-3 rounded-full shadow-lg transition duration-300 z-40"
          title="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
