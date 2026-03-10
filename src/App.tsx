import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mission from './components/Mission';
import Impact from './components/Impact';
import WhySupport from './components/WhySupport';
import GetInvolved from './components/GetInvolved';
import Trust from './components/Trust';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="pt-20">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Problem />
            <Mission />
            <Impact />
            <WhySupport />
            <GetInvolved />
            <Trust />
            <Newsletter />
          </>
        )}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
        {currentPage === 'contact' && <Contact />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
