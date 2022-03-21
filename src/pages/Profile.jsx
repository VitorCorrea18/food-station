import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/profile.css';

export default function Profile() {
  const history = useHistory();
  if (localStorage.getItem('user')) {
    const { email } = JSON.parse(localStorage.getItem('user'));
    return (
      <>
        <Header title="Profile" withSearchButton={ false } />
        <div className="main-profile">
          <h2 data-testid="profile-email" className="email-text">{email}</h2>
          <button
            className="profile-button"
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => history.push('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            className="profile-button"
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => history.push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            className="profile-button"
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => {
              localStorage.clear();
              history.push('/');
            } }
          >
            Logout
          </button>
        </div>
        <Footer />
      </>);
  }
  return (
    <>
      <Header title="Profile" withSearchButton={ false } />
      <Footer />
    </>
  );
}
