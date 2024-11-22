import React from 'react';
import Navbar from './components/Navbar';
import VideoSlider from './components/VideoSlider';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-zinc-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
            alt="Guitarist performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-red-600 tracking-wider">
            JOHN DOE
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Professional Guitarist & Composer
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Latest <span className="text-red-600">Performances</span>
          </h2>
          <VideoSlider />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative glow-effect">
              <img
                src="https://images.unsplash.com/photo-1485278537138-4e8911a13c02?auto=format&fit=crop&q=80"
                alt="Guitarist portrait"
                className="rounded-lg shadow-2xl floating-animation"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-red-600">Me</span>
              </h2>
              <p className="text-gray-300 mb-6">
                With over 15 years of experience in the music industry, I've performed on
                stages across the globe, sharing my passion for guitar with audiences
                worldwide. My unique style blends classical techniques with modern
                innovation, creating unforgettable musical experiences.
              </p>
              <p className="text-gray-300">
                Whether I'm performing solo, collaborating with other artists, or
                teaching the next generation of guitarists, my goal is to push the
                boundaries of what's possible with six strings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Let's <span className="text-red-600">Connect</span>
          </h3>
          <button className="bg-red-600/80 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-colors">
            Contact Me
          </button>
          <div className="mt-8 text-gray-400">
            © 2024 John Doe. All rights reserved.
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;