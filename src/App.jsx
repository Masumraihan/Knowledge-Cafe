import React from 'react';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header/>
      <Blogs/>
    </div>
  );
};

export default App;