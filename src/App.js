import './App.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button, Typography, Alert } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  margin: '0 40px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'auto',
  borderRadius: '15px', // Zakrąglenie kontenera
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtelny cień
}));

function App() {
  const [cat, setCat] = useState('');
  const [image, setImage] = useState('');
  const [radio, setRadio] = useState(''); // Wybrany tag dla API
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  const fetchImage = async () => {
    const baseUrl = process.env.REACT_APP_CAT_KEY || 'https://cataas.com/cat';
    const imageUrl = radio ? `${baseUrl}/${radio}` : baseUrl; // Dodanie tagu, jeśli jest wybrany
    setLoading(true);
    setImage(null);
    setErrorStatus(null);

    try {
      const res = await fetch(imageUrl);
      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL);
    } catch (error) {
      setErrorStatus(error.message || 'An unknown error occurred while fetching the image.');
    } finally {
      setLoading(false);
    }
  };

  const capitalizeName = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <Box className="child">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
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
                <FormControlLabel value="funny" control={<Radio />} label="Śmieszne Kociakk" />
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
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
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
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
