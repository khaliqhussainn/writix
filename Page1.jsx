import React, { useState } from 'react';
import Image1 from '../../assets/react native.png';
import Image2 from '../../assets/next.png';
import Image3 from '../../assets/javascript.jpeg';
import Image4 from '../../assets/download.png';
import Image5 from '../../assets/app.jpeg';
import Image6 from '../../assets/sql.jpeg';

export default function CardsWithSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const cards = [
    { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React', image: 'https://example.com/images/Image1?height=200&width=300' },
    { id: 2, title: 'Advanced JavaScript', description: 'Dive deep into JavaScript concepts', image: 'https://example.com/images/Image2?height=200&width=300' },
    { id: 3, title: 'CSS Mastery', description: 'Master CSS and responsive design', image: 'https://example.com/images/Image3?height=200&width=300' },
    { id: 4, title: 'Node.js Essentials', description: 'Build server-side applications with Node.js', image: 'https://example.com/images/Image4?height=200&width=300' },
    { id: 5, title: 'Database Design', description: 'Learn to design efficient databases', image: 'https://example.com/images/Image5?height=200&width=300' },
    { id: 6, title: 'UI/UX Principles', description: 'Create user-friendly interfaces', image: 'https://example.com/images/Image6?height=200&width=300' },
  ];

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search cards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
          aria-label="Search cards"
        />
      </div>
      <div style={styles.cardGrid}>
        {filteredCards.map(card => (
          <div key={card.id} style={styles.card}>
            <img src={card.image} alt={card.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>{card.title}</h2>
              <p style={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  searchContainer: {
    marginBottom: '20px',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  cardImage: {
    width: '100%',
    height: '200px',
    // objectFit: 'cover' as const,
  },
  cardContent: {
    padding: '15px',
  },
  cardTitle: {
    fontSize: '18px',
    // fontWeight: 'bold' as const,
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#666',
  },
};
