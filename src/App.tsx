import React from 'react';
import './App.css';
// import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <div className="fixed inset-0 flex justify-center sm:px-8">
      <div className='flex w-full max-w-2xl lg:px-8'>
        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
