import React from 'react';
import { Typography, Alert } from '@mui/material';

const CatDisplay = ({ image, cat, loading, errorStatus }) => {
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
            <img src={image} alt="Cat" className="cat-image" />
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
