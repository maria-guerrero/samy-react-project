import React, { useState } from 'react';
import './styles/App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ImageList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
