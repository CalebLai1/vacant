import React from 'react';
// components
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import siteBg from './assets/site-bg.jpg';

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${siteBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='overflow-hidden'>
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
