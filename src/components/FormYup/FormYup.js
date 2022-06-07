import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { candidateTypes } from './candidateType';
import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
  Box,
} from '@mui/material';

const FormYup = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={{ border: '2px solid purple', padding: '3rem' }}>
      <Typography marginBottom={10} variant="h2" textAlign={'center'}>
        Marriage Registration Form
      </Typography>
      <Grid container rowSpacing={{ md: 3, lg: 3 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display={'flex'}
          justifyContent={'space-between'}
          sx={{ maxWidth: '90%', margin: 'auto' }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Personal Information</Typography>
            <FormControl sx={{ width: '90%' }}>
              <Autocomplete
                options={candidateTypes}
                renderInput={params => (
                  <TextField
                    {...params}
                    {...register('onBehalfOf')}
                    name="onBehalfOf"
                    label="Profile Looing for?"
                    variant="standard"
                    margin="normal"
                    required
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <Autocomplete
                options={['Male', 'Female']}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Gender"
                    variant="standard"
                    margin="normal"
                    name="gender"
                    {...register('gender')}
                    required
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                label="Name"
                type={'text'}
                variant="standard"
                margin="normal"
                name="name"
                {...register('name')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type={'email'}
                label="Email"
                variant="standard"
                margin="normal"
                name="email"
                {...register('email')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type={'tel'}
                label="Phone"
                variant="standard"
                margin="normal"
                name="phone"
                {...register('phone')}
                required
              />
            </FormControl>

            <InputLabel sx={{ marginTop: '2rem' }}>Date of Birth</InputLabel>
            <FormControl sx={{ width: '90%' }}>
              <TextField
                type="date"
                variant="standard"
                margin="normal"
                name="date"
                {...register('date')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type="password"
                label="Password"
                variant="standard"
                margin="normal"
                name="password"
                {...register('password')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type="password"
                label="Confirm password"
                variant="standard"
                margin="normal"
                name="confirmPassword"
                {...register('confirmPassword')}
                required
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4">Related Information</Typography>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type={'number'}
                label="National Id Card"
                variant="standard"
                margin="normal"
                name="NID"
                {...register('NID')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type={'number'}
                label="Weight"
                variant="standard"
                margin="normal"
                InputProps={{
                  startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                name="weight"
                {...register('weight')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type={'text'}
                label="Height"
                placeholder="5ft 7in"
                variant="standard"
                margin="normal"
                InputProps={{
                  startAdornment: <InputAdornment position="start">ft</InputAdornment>,
                }}
                name="height"
                {...register('height')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextField
                type={'text'}
                label="Religion"
                variant="standard"
                margin="normal"
                name="religion"
                {...register('religion')}
                required
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <Autocomplete
                options={['Sunni', 'Shia']}
                renderInput={params => (
                  <TextField
                    {...params}
                    type={'text'}
                    label="Sect"
                    variant="standard"
                    margin="normal"
                    name="sect"
                    {...register('sect')}
                    required
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <Autocomplete
                options={['Never married', 'Dovorced', 'Widower', 'Widow']}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Marital Status"
                    variant="standard"
                    margin="normal"
                    name="maritalStatus"
                    {...register('maritalStatus')}
                    required
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ width: '90%' }}>
              <TextareaAutosize
                minRows={6}
                maxRows={7}
                placeholder="Tell us something about yourself!"
                style={{
                  marginTop: '1.5rem',
                  fontSize: '1.1rem',
                  border: 'none',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.6)',
                  padding: '1rem 0',
                  resize: 'none',
                }}
                name="aboutYourself"
                {...register('aboutYourself')}
              />
            </FormControl>
            <Button
              size="large"
              sx={{ display: 'block', marginTop: '2rem', width: '90%', marginRight: 'auto' }}
              type="submit"
              variant="contained"
              color="primary"
            >
              SUBMIT
            </Button>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default FormYup;
