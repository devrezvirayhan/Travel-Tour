import Grid from '@mui/material/Grid';
import React from 'react';
import bgBanner from '../../../img/Banner.jpg';
const Banner = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sm={12}>
                    <img className="img-fluid" src={bgBanner} alt="Home Background"></img>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;