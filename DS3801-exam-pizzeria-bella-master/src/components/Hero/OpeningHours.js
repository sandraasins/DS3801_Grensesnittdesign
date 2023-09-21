import React from "react";
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';


export default function OpeningHours() {
    return(
        <section className="openingHours">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems:'center', textAlign: 'center', mt: '8em', mb: '8em', color: '#FFFFFF' }} item xs={6}>
                            <Typography className= "opening-hours" component="h1" variant="h4" sx={{ flexDirection: 'column', letterSpacing: '4px', color: '#FFFFFF', justifyContent: 'center', textAlign: 'center', m:'40px' }}>
                            OPENING HOURS
                            </Typography>
                            <Typography className="mon-thur"component="h2" variant="h6" sx={{ letterSpacing: '4px', color: '#FFFFFF', justifyContent: 'center', textAlign: 'center' }}>
                            MON - THUR: 11 - 22
                            </Typography>
                            <Typography className="fri-sun"component="h2" variant="h6" sx={{ letterSpacing: '4px', color: '#FFFFFF', justifyContent: 'center', textAlign: 'center' }}>
                            FRI - SUN: 11 -23
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}