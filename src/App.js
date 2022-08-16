import React from 'react';

import { About, Footer, Header, Skill, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skill />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;