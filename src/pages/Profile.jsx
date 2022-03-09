import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <>
      <Header title="Profile" withSearchButton={ false } />
      <h1>Profile</h1>
      <Footer />
    </>

  );
}
