import React from 'react';
import { LampDemo, LampContainer } from '../components/ui/lamp';
import {WavyBackground}  from "../components/ui/Wavy"
import Navbar from '../components/Navbar';
import Recipes from '../components/Recipes'
 
const Home = () => {
  return (
   <>
  <LampDemo />
  <main className='w-full flex flex-col'>
<section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
  </main>
   {/* <WavyBackground /> */}
  </>
 
  )
}

export default Home