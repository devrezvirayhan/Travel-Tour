import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import './Bonous.css';


const Bonous = () => {
    return (
        <div className="mt-2 mb-2 squre">
            <Typography className="Car p-3" variant="h3" gutterBottom component="div">
                Traveling
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <img src="https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                        <h1 className="text-black mt-3 p-1">Anywhere We Roam</h1>
                        <p className="text-black">The layout of the travel blog merely serves as a white canvas to emphasize the atmospheric and immersive photography that Anywhere We Roam is a master at. Their photography and writings are top-notch and has the ability to transport you to the location in question..</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box>
                        <img src="https://images.unsplash.com/photo-1507671280192-5900ae887d3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                        <h1 className="text-black mt-3 p-2">Maptia</h1>
                        <p className="text-black">has not been updating as regularly as I had hope for but even then, the design they had come up with years ago is timeless and still stand as one of the best well-designed travel websites out there.deserve a spot on this list.</p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Bonous;