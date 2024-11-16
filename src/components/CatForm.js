import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button } from '@mui/material';

const CatForm = ({ cat, setCat, radio, setRadio, fetchImage }) => {
  return (
    <FormControl>
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
      <RadioGroup
        name="radio-buttons-group"
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
      >
        <FormControlLabel value="cute" control={<Radio />} label="Słodziaczki Kociaczki" />
        <FormControlLabel value="funny" control={<Radio />} label="Śmieszne Kociaki" />
        <FormControlLabel value="angry" control={<Radio />} label="Wkurzony Kocisko" />
        <FormControlLabel value="sleeping" control={<Radio />} label="Śpiące Królewicze i Królewny" />
        <FormControlLabel value="kitten" control={<Radio />} label="Kociątka Maluszki" />
      </RadioGroup>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchImage}
        fullWidth
        style={{ marginTop: '20px' }}
      >
        Adoptuj Koteczka z Kociego Królestwa
      </Button>
    </FormControl>
  );
};

export default CatForm;
