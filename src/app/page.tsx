"use client"
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Kanit } from "next/font/google"
const font = Kanit({ subsets: ["latin"], weight: "600" });
const theme = createTheme({
  typography: {
    "fontFamily": `${font.className}`,
  },
});

export default function RegisterPage() {

  const { register, control, handleSubmit, formState, reset } = useForm<form>()

  const { errors, isSubmitting, isSubmitted, isSubmitSuccessful } = formState


  const onSubmit = (data: form) => {
    // Simulate registration process
    console.log(data);
    // Reset the form after successful registration
    reset()
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="py-4 shadow-2xl mt-3 shadow-gray-400 bg-inherit rounded-lg" maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth margin="normal">
            <TextField
              {...register('name', {
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: 'Name must only contain letters and spaces',
                },
                required: {
                  value: true,
                  message: "username is required"
                }
              })}
              required
              type='text'
              id='name'
              color='warning'
              label="Name"
              error={errors.name?.message !== undefined}
              helperText={errors.name?.message}
            />
          </FormControl>
          {/* end of name ....... */}



          <FormControl fullWidth margin="normal">
            <TextField
              {...register("email", {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                },
                required: {
                  value: true,
                  message: "Email is required"
                }
              })}
              required
              type='email'
              id="email"
              color='warning'
              label="Email"
              error={errors.email?.message !== undefined}
              helperText={errors.email?.message}
            />
          </FormControl>
          {/* end of email input */}


          <FormControl fullWidth margin="normal">
            <TextField
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required"
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                }
              })}
              required
              id="password"
              color='warning'
              type="password"
              label="Password"
              error={errors.password?.message !== undefined}
              helperText={errors.password?.message}
            />
          </FormControl>
          {/* end of passworf input */}


          <FormControl fullWidth margin="normal">
            <TextField
              {...register("age", {
                required: {
                  value: true,
                  message: "age in reqiured"
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Invalid age input'
                }
              }
              )}
              required
              id="age"
              color='warning'
              type="number"
              label="Age"
              error={errors.age?.message !== undefined}
              helperText={errors.age?.message}
            />
          </FormControl>
          {/* end age filed */}


          <FormControl fullWidth margin="normal">
            <TextField
              {...register("dateOfBirth", {
                required: {
                  value: true,
                  message: "date of birth is required"
                }
              })}
              required
              id="dateOfBirth"
              color='warning'
              type="date"
              // value="mm/dd/yyyy"
              label="Date of Birth"
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth && errors.dateOfBirth.message}
            />
          </FormControl>


          <FormControl component="fieldset" fullWidth margin="normal">

            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue="male"
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
