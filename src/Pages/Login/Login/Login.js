import { Alert, CircularProgress, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import useAuth from './../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, isLoading, signWithGoogle, loginUser, authError, } = useAuth();

    const location = useLocation()
    const histroy = useHistory()

    const handleonChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location,
            histroy)
        e.preventDefault();
    }

 
    const handleGoogleSignIn = ()=>{
        signWithGoogle(location,histroy)
    }

    return (
       <div>
    <Navbar></Navbar>
            <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Enter Your Email"
                            name="email"
                            onChange={handleonChange}
                            type="text"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Enter Your Password"
                            name="password"
                            onChange={handleonChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to="/register">
                            <Button variant="text">New User? Plase Register</Button>
                        </NavLink>
                    </form>
                    <h6>--------------------</h6>

                    <Button onClick={handleGoogleSignIn} variant="contained">Sign With Google</Button>
                    {
                        isLoading && <CircularProgress color="success" />
                    }
                    {
                        user?.email && <Alert severity="success">User Login Successfully! Congress.... </Alert>

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
    );
};

export default Login;