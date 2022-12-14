import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Footer from './components/Footer';


function App() {
  return (
    <div className="inset-0 flex justify-center sm:px-8">
      <div className='flex w-full max-w-7xl lg:px-8'>
        <div className="w-full h-fit ring-1 ring-zinc-100 bg-zinc-900 dark:ring-zinc-300/20">
          <Header />

          <Router>
            <Routes>
              <Route path='/' element={<Introduction />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/articles' element={<Articles />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/contact-me' element={<Contact />} />

            </Routes>
          </Router>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
