import './App.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  margin: '0 40px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '500px',
}));

function App() {
  const [cat, setCat] = useState('');
  const [image, setImage] = useState('');
  const [radio, setRadio] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  const fetchImage = async () => {
    const imageUrl = 'https://cataas.com/cat';
    setLoading(true);
    setImage(null);
    setErrorStatus(null);

    try {
      const res = await fetch(imageUrl);
      if (res.status < 200 || res.status >= 300) {
        setErrorStatus(`Error: ${res.status}`);
        setLoading(false);
        return;
      }

      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL);
      setLoading(false);
    } catch (error) {
      setErrorStatus('Error fetching image');
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
                <FormControlLabel value="red" control={<Radio />} label="Red" />
                <FormControlLabel value="green" control={<Radio />} label="Green" />
                <FormControlLabel value="blue" control={<Radio />} label="Blue" />
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
              <Typography variant="h6" color="error">
                {errorStatus}
              </Typography>
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
