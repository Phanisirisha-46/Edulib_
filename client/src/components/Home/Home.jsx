import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [keywords, setKeywords] = useState({
    Subjects: ['Programming', 'Data Structures', 'Algorithms', 'Operating Systems', 'Databases', 'Networking', 'Software Engineering', 'Artificial Intelligence'],
    Novels: ['To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Great Gatsby', 'Moby Dick'],
    Magazines: ['National Geographic', 'Time', 'Forbes', 'The New Yorker', 'Wired']
  });

  const [selectedCategory, setSelectedCategory] = useState('Subjects');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search query when changing category
  };

  return (
    <div className='home-container'>
      <div className='tags-container'>
        <span 
          className={`tag ${selectedCategory === 'Subjects' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Subjects')}
        >
          Subjects
        </span>
        <span 
          className={`tag ${selectedCategory === 'Novels' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Novels')}
        >
          Novels
        </span>
        <span 
          className={`tag ${selectedCategory === 'Magazines' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Magazines')}
        >
          Magazines
        </span>
      </div>
      <div className='card-container'>
        <input 
          type='text' 
          value={searchQuery} 
          onChange={handleChange} 
          placeholder='Search...' 
          className='search-bar'
        />
        <div className='keywords-grid'>
          {keywords[selectedCategory]
            .filter(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((keyword, index) => (
              <div key={index} className='keyword-item'>
                {keyword}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
