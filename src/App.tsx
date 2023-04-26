import React from 'react';

import {
  Banner,
  Header,
  Nav,
  About,
  Services,
  Contact,
  Work
} from './common/components';

const App: React.FC = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
