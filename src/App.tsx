import React from 'react';
import './App.css';
// import Container from './components/Container';
import Header from './components/Header';
import Introduction from './components/Introduction.jsx';


function App() {
  return (
    <div className="fixed inset-0 flex justify-center sm:px-8">
      <div className='flex w-full max-w-7xl lg:px-8'>
        <div className="w-full ring-1 ring-zinc-100 bg-zinc-900 dark:ring-zinc-300/20">
          <Header />
          
          <Introduction />

        </div>
      </div>
    </div>
  );
}

export default App;
