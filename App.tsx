import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';
import BookingPage from './components/BookingPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'booking'>('home');

  const showPortfolio = () => setCurrentPage('portfolio');
  const showBooking = () => setCurrentPage('booking');
  const showHome = () => setCurrentPage('home');

  if (currentPage === 'portfolio') {
    return <PortfolioPage onBack={showHome} />;
  }

  if (currentPage === 'booking') {
    return <BookingPage onBack={showHome} />;
  }

  return (
    <div className="App">
      <Header onBooking={showBooking} />
      <Hero onBooking={showBooking} />
      <Process onBooking={showBooking} />
      <Portfolio onViewAll={showPortfolio} onBooking={showBooking} />
      <Pricing onBooking={showBooking} />
      <Testimonials onBooking={showBooking} />
      <Contact onBooking={showBooking} />
      <Footer onBooking={showBooking} />
    </div>
  );
}

export default App;