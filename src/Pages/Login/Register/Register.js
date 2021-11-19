


import { Alert, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Navbar from './../../Home/Navbar/Navbar';



const Register = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({})
    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const { user, registerUser, authError, isLoading } = useAuth();
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Mach')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Container>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>
                                Register
                            </Typography>

                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-password-input"
                                    label="Your Frist Name"
                                    name="name"
                                    onBlur={handleonBlur}
                                    type="text"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-password-input"
                                    label="Your Last Name"
                                    name="name"
                                    onBlur={handleonBlur}
                                    type="text"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-password-input"
                                    label="Enter Your Email"
                                    name="email"
                                    onBlur={handleonBlur}
                                    type="email"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-password-input"
                                    label="Your Password"
                                    name="password"
                                    onBlur={handleonBlur}
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-password-input"
                                    label="Re-Type Your Password"
                                    name="password2"
                                    onBlur={handleonBlur}
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                                <NavLink
                                    style={{ textDecoration: 'none' }}

                                    to="/login">
                                    <Button variant="text">Already Registered? Plase Login</Button>

                                </NavLink>
                            </form>}

                            {
                                isLoading && <CircularProgress color="success" />
                            }
                            {
                                user?.email && <Alert severity="success">User Created Successfully! Congress.... </Alert>

                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>

                            }
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <img className="mt-2" style={{ width: '100%' }} src="https://media.istockphoto.com/photos/close-up-view-of-computer-screen-on-website-login-page-picture-id157533406?b=1&k=20&m=157533406&s=170667a&w=0&h=6YIw7cIjyrG-6CzXcYzPJqSQFXlbuJTfCRZGUPC_nss=" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default Register;










