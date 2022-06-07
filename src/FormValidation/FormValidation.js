import React, { useEffect } from 'react';
import classes from './FormValidation.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().required('First Name is a required field!'),
  lastName: yup.string().required('Last Name is a required field!'),
  age: yup.number().positive().integer().required('Age must be a positive integer!'),
  email: yup.string().email().required('Email is a required field!'),
  password: yup.string().min(6).max(16).required('Password must be at least 6 characters long!'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const FormValidation = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <div style={{ maxWidth: '50%', margin: '5rem auto' }}>
      <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes['form-control']}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text" placeholder="First Name" {...register('firstName')} />
          <p>{errors.firstName?.message}</p>
        </div>

        <div className={classes['form-control']}>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text" placeholder="Last Name" {...register('lastName')} />
          <p>{errors.lastName?.message}</p>
        </div>

        <div className={classes['form-control']}>
          <label htmlFor="age">Age</label>
          <input name="age" type="number" placeholder="Age" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>

        <div className={classes['form-control']}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>

        <div className={classes['form-control']}>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>

        <div className={classes['form-control']}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
          <p>{errors.confirmPassword && 'Passwords should match!'}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
