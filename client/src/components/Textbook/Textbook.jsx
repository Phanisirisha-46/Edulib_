import React, { useState } from 'react';
import './TextBook.css';

const TextBook = () => {
  const [selectedYear, setSelectedYear] = useState('Year 1');

  // Sample data for books
  const books = {
    'Year 1': [
      { title: 'Introduction to Programming', author: 'John Doe' },
      { title: 'Fundamentals of Algorithms', author: 'Jane Smith' },
      { title: 'Data Structures and Algorithms', author: 'Alan Turing' },
      { title: 'Computer Systems', author: 'Ada Lovelace' },
      { title: 'Operating Systems', author: 'Grace Hopper' },
      { title: 'Database Management', author: 'Herman Hesse' },
      { title: 'Networking Basics', author: 'Claude Shannon' },
      { title: 'Software Engineering', author: 'Edgar Dijkstra' },
      { title: 'Web Development', author: 'Tim Berners-Lee' },
      { title: 'Computer Graphics', author: 'John Warnock' },
    ],
    'Year 2': [
      { title: 'Advanced Programming', author: 'Edsger Dijkstra' },
      { title: 'Theory of Computation', author: 'Michael Sipser' },
      { title: 'Artificial Intelligence', author: 'Marvin Minsky' },
      { title: 'Machine Learning', author: 'Tom Mitchell' },
      { title: 'Human-Computer Interaction', author: 'Ben Shneiderman' },
      { title: 'Computer Vision', author: 'David Lowe' },
      { title: 'Information Security', author: 'Bruce Schneier' },
      { title: 'Embedded Systems', author: 'Wayne Wolf' },
      { title: 'Cloud Computing', author: 'Rajkumar Buyya' },
      { title: 'Big Data', author: 'Ian Witten' },
    ],
    'Year 3': [
      { title: 'Advanced Algorithms', author: 'Thomas Cormen' },
      { title: 'Computer Architecture', author: 'David Patterson' },
      { title: 'Distributed Systems', author: 'Andrew Tanenbaum' },
      { title: 'Cyber-Physical Systems', author: 'Edward Lee' },
      { title: 'Quantum Computing', author: 'Michael Nielsen' },
      { title: 'Blockchain Technology', author: 'Satoshi Nakamoto' },
      { title: 'Internet of Things', author: 'Arshdeep Bahga' },
      { title: 'Mobile Computing', author: 'Joerg K.H. Franke' },
      { title: 'Data Science', author: 'Jake VanderPlas' },
      { title: 'Natural Language Processing', author: 'Christopher Manning' },
    ],
    'Year 4': [
      { title: 'Advanced Software Engineering', author: 'Ian Sommerville' },
      { title: 'Cloud Security', author: 'Ronald L. Krutz' },
      { title: 'Deep Learning', author: 'Yann LeCun' },
      { title: 'Computational Biology', author: 'Pavel Pevzner' },
      { title: 'Computational Theory', author: 'Oded Goldreich' },
      { title: 'Advanced Networking', author: 'James Kurose' },
      { title: 'Game Development', author: 'Eric Lengyel' },
      { title: 'Ethical Hacking', author: 'Nitesh Dhanjani' },
      { title: 'Robotics', author: 'John Hollerbach' },
      { title: 'Augmented Reality', author: 'Tom Caudell' },
    ],
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className='textbook-container'>
      <div className='year-tags'>
        {Object.keys(books).map(year => (
          <button
            key={year}
            className={`year-tag ${selectedYear === year ? 'active' : ''}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className='cards-container'>
        {books[selectedYear].map((book, index) => (
          <div key={index} className='card'>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBook;
