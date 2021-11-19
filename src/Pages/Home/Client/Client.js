import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
const Client = () => {
    return (
        <div className="mt-4">
            <h1 className="mb-3 p-3 bg-dark text-white">Always Be There</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={4} sm={12}>
                        <img className="w-100 mt-2 mb-2" src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" alt="" />
                        <h2 className="mt-1 mb-2">Olivia</h2>
                        <p className="mt-1 mb-2">Open an account today to view estimates of the retirement, disability, and survivors benefits you and your growing family may be eligible for in the future. Already receiving benefits? Use your account to check and manage your benefits, and much more!</p>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <img className="w-100 mt-2 mb-2" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                        <h2 className="mt-1 mb-2">Ava</h2>
                        <p className="mt-1 mb-2">We offer a wide range of resources for families with children. disability, and survivors benefits you When a parent becomes disabled or dies, we have programs and benefits to help secure the family's financial future.</p>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <img className="w-100 mt-2 mb-2" src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
                        <h2 className="mt-1 mb-2">George</h2>
                        <p className="mt-1 mb-2">We encourage you not to carry your Social Security card with you every day. The best way to “Guard Your Card” is to keep it in a safe place and share it only when required, which is rare. In fact, in most cases, just knowing the Social Security number</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Client;