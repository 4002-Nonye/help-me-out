import React from 'react';
import Header from '../../components/Header/Header';
import AppFeatures from '../../components/AppFeatures/AppFeatures';
import AppOverview from '../../components/AppOverview/AppOverview';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <AppFeatures />
      <AppOverview />
      <Footer />
    </div>
  );
}

export default HomePage;
