// Init
import React from 'react';
import Hero from '../components/Hero';

// Importing Components
import NavBar from '../components/NavBar';
import Action from '../components/Action';
import Footer from '../components/Footer';

// Home Component
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Action />
      <Footer />
    </div>
  );
}
