import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import '../App.css'; // Import stylów

const CatForm = ({ cat, setCat, radio, setRadio, fetchImage }) => {
  const setRandomName = () => {
    const randomNames = ["Misia", "Filemon", "Mruczek", "Puszek", "Kicia"];
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    setCat(randomName);
  };

  return (
    <form>
      <TextField
        label="Podaj imię kotka"
        type="text"
        id="Cat"
        variant="outlined"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        fullWidth
        margin="normal"
      />
      <button
        onClick={setRandomName}
        className="button" // Dodano klasę
        type="button"
      >
        Losuj imię
      </button>
      <RadioGroup
        name="radio-buttons-group"
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
        style={{ margin: '20px 0' }}
      >
        <FormControlLabel value="cute" control={<Radio />} label="Słodziaczki Kociaczki" className="radio-label" />
        <FormControlLabel value="funny" control={<Radio />} label="Śmieszne Kociaki" className="radio-label" />
        <FormControlLabel value="angry" control={<Radio />} label="Wkurzony Kocisko" className="radio-label" />
        <FormControlLabel value="sleeping" control={<Radio />} label="Śpiące Królewicze i Królewny" className="radio-label" />
        <FormControlLabel value="kitten" control={<Radio />} label="Kociątka Maluszki" className="radio-label" />
      </RadioGroup>
      <button
        onClick={fetchImage}
        className="button button-adopt" // Dodano dodatkową klasę
        type="button"
      >
        Adoptuj Koteczka z Kociego Królestwa
      </button>
    </form>
  );
};

export default CatForm;
