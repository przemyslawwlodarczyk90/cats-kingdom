import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  margin: '0 40px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
}));

const Layout = ({ leftContent, rightContent }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>{leftContent}</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>{rightContent}</Item>
      </Grid>
    </Grid>
  );
};

export default Layout;
