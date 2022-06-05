import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const TextFields = () => {
  const [userInputs, setUserInputs] = useState({
    name: '',
    email: '',
    password: '',
    subscribe: false,
    age: 0,
  });

  const handleChange = event => {
    setUserInputs(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(userInputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="name"
        onChange={handleChange}
        sx={{ marginRight: '1rem' }}
        type="text"
        placeholder="Name"
        variant="outlined"
        value={userInputs.name}
      />
      <TextField
        name="email"
        onChange={handleChange}
        sx={{ marginRight: '1rem' }}
        type="email"
        placeholder="Email"
        variant="standard"
        value={userInputs.email}
      />
      <TextField
        name="password"
        onChange={handleChange}
        sx={{ marginRight: '1rem' }}
        type="password"
        placeholder="Password"
        variant="filled"
        value={userInputs.password}
      />

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setUserInputs(prev => {
                  return { ...prev, subscribe: !userInputs.subscribe };
                })
              }
            />
          }
          label="Label"
        />

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select name="age" value={userInputs.age} label="Age" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default TextFields;
