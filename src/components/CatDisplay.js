import React, { useState, useEffect } from 'react';
import { Typography, Alert } from '@mui/material';

const animations = [
  'fadeIn',
  'zoomIn',
  'flip',
  'slideIn',
  'bounce',
  'rotateFade',
  'ripple',
  'skew',
  'blur',
  'pulse',
];

const CatDisplay = ({ image, cat, loading, errorStatus }) => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (image) {
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      setAnimation(''); // Resetujemy animację przed przypisaniem nowej
      setTimeout(() => setAnimation(randomAnimation), 10); // Przypisujemy nową animację z lekkim opóźnieniem
    }
  }, [image]);

  const capitalizeName = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <>
      {loading ? (
        <Typography variant="h6">Ładowanie...</Typography>
      ) : errorStatus ? (
        <Alert severity="error" style={{ marginTop: '20px' }}>
          {errorStatus}
        </Alert>
      ) : (
        image && (
          <>
            <img
              src={image}
              alt="Cat"
              className={`cat-image ${animation}`} // Dodano dynamiczną klasę
            />
            <Typography
              variant="h5"
              style={{
                marginTop: '10px',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              {capitalizeName(cat)}
            </Typography>
          </>
        )
      )}
    </>
  );
};

export default CatDisplay;
