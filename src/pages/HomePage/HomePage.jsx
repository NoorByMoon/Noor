import React from 'react'
import Team from '../HomePage/Team'
import Solution from '../HomePage/Solution'
import Footer from '../../Components/Shared/Footer'
import Waitlist from "./Waitlist";

const HomePage = () => {
  return (
    <div>
      <Team />
      <Solution />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default HomePage