"use client"
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Kanit} from "next/font/google"
const font = Kanit({subsets: ["latin"], weight: "600"});
const theme = createTheme();

export default function RegisterPage() {
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // Simulate registration process
    console.log(data);
    // Reset the form after successful registration
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="py-4 shadow-xl bg-inherit"  maxWidth="sm">
        <Typography className={`${font.className}`} variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth margin="normal">
            <Controller

              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Name is required' }}
              render={({ field }) => <TextField {...field} color='warning' label="Name" error={!!errors.name} helperText={errors.name && errors.name.message} />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Controller

              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
              render={({ field }) => <TextField {...field} color='warning' label="Email" error={!!errors.email} helperText={errors.email && errors.email.message} />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Controller

              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } }}
              render={({ field }) => <TextField {...field} color='warning' type="password" label="Password" error={!!errors.password} helperText={errors.password && errors.password.message} />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Controller
              name="age"
              control={control}
              defaultValue=""
              rules={{ required: 'Age is required', pattern: { value: /^[0-9]*$/, message: 'Invalid age' } }}
              render={({ field }) => <TextField {...field} color='warning' type="number" label="Age" error={!!errors.age} helperText={errors.age && errors.age.message} />}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Controller
            
              name="dateOfBirth"
              control={control}
              defaultValue=""
              rules={{ required: 'Date of Birth is required' }}
              render={({ field }) => <TextField {...field} color='warning' type="date" label="Date of Birth" error={!!errors.dateOfBirth} helperText={errors?.dateOfBirth && errors?.dateOfBirth.message} />}
            />
          </FormControl>
          <FormControl component="fieldset" fullWidth margin="normal">

            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: 'Gender is required' }}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel value="male" control={<Radio color='warning' />} label="Male" />
                  <FormControlLabel value="female" control={<Radio color='warning' />} label="Female" />
                  <FormControlLabel value="other" control={<Radio color='warning' />} label="Other" />
                </RadioGroup>
              )}
            />
          </FormControl>
          <Button className='bg-orange-500' type="submit" variant="contained" color="warning" fullWidth>
            Register
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}
