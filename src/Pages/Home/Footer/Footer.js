import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        //Footer Page 
        <div className="bg-dark text-white mt-2 p-2">
            <Container>
                <Grid container>
                    <Grid item xs={4} md={4} >
                        <Box>
                            <h1>Brand</h1>
                            <div class="d-flex flex-column">
                                <div class="p-1">St. Lucia</div>
                                <div class="p-1">Yosemite</div>
                                <div class="p-1">Florence</div>
                                <div class="p-1">Santorini</div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4} >
                        <Box>
                            <h1>Usefull Links</h1>
                            <div class="d-flex flex-column">
                                <div class="p-1">Great Barrier Reef</div>
                                <div class="p-1">Yellowstone</div>
                                <div class="p-1">Niagara Falls</div>
                                <div class="p-1">San Francisco</div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4} >
                        <Box>
                            <h1>Address</h1>
                            <div class="d-flex flex-column">
                                <div class="p-1">200, D-block,South Island, New Zealand</div>
                                <div class="p-1">+88 99695455155</div>
                                <div class="p-1">+098 5425425742</div>
                                <div class="p-1">teaveltoor@gmail.com</div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <hr />
            </Container>
            <p>All Right Reserved © Teaviling Toor</p>
        </div>
        

    );
};

export default Footer;