
import React from 'react'
import SIdebar from './components/SIdebar';
import Hero from './components/Hero';
import SearchBox from './components/SearchBox';






function Home() {
  return (
    <>
      <div className="w-full flex gap-10 ml-[5vw] mt-20">
        <SIdebar />

        <Hero />

        <SearchBox />

      </div>
    </>
  );
}

export default Home