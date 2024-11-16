import './App.css';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';

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

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setRadio(target.value);
    }
  };

  console.log(cat);

  return (
    <Box className="child">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <FormControl>
              <TextField
                placeholder="Add Cat Name"
                type="text"
                id="Cat"
                variant="outlined"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
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
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h2>Cat could not be generated</h2>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
