import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { top100Films } from './topFilms';

const Autocompletes = () => {
  return (
    <Autocomplete
      sx={{ width: 300, marginTop: '2rem' }}
      options={top100Films}
      renderInput={params => <TextField {...params} label="List of top 100 movies" />}
    />
  );
};

export default Autocompletes;
