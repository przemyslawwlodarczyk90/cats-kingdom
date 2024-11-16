import './App.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';

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
  return (
    <Box className= 'child'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <FormControl>
              <TextField
                placeholder="Add Cat Name"
                type="text"
                id="Cat"
                variant="outlined"
              />
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel type="text" value="red" control={<Radio />} label="Red" />
                <FormControlLabel type="text" value="green" control={<Radio />} label="Green" />
                <FormControlLabel type="text" value="blue" control={<Radio />} label="Blue" />
      
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
