import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header title="Profile" withSearchButton={ false } />
      <h2 data-testid="profile-email">{email}</h2>
      <button
        data-testid="profile-done-btn"
        type="button"
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        type="button"
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
      >
        Logout
      </button>
      <Footer />
    </>

  );
}
