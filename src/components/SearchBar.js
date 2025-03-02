import React from 'react';
import SamyLogo from '../images/samy-alliance.jpg';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="header">
        <div className="header-collection">
      <img src={SamyLogo} className="samy-logo" alt="samy-logo" />
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="You're looking for something?"
        className="search-input"
      />
      </div>
    </header>
  );
};

export default SearchBar;
