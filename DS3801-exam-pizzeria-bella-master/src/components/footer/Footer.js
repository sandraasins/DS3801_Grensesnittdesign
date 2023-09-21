import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';
import React from 'react';

function Footer() {
    return(
        <footer className="footer-container">
            <Container maxWidth="100%">
                <Box sx={{ m: 10 }}>
                    <Grid container spacing={15}>
                        <Grid item xs={12} md={9} lg={6}>
                            <Typography component="h1" variant="h6" sx={{ letterSpacing: '4px' }}>
                            <a id="about-us">ABOUT US:</a>
                                <Typography>
                                No one is as proud of their food as the Italians. 
                                Food and wine are associated with being together, with family and friends. 
                                Large families like to meet over a meal and eat and talk for hours. 
                                And the longer the meal lasts, the more quality time with the family. 
                                Then, of course, they also serve many dishes.
                                Since we are a small and cozy restaurant with just a little space, 
                                we do not take table reservations.
                                </Typography>
                            </Typography>
                            <Typography component="h1" variant="h6" sx={{ letterSpacing: '4px', mt: 4 }}>
                                ADDRESS:
                                <Typography sx={{ flexDirection: 'column' }}>
                                Casparis gate 5
                                </Typography>
                                <Typography sx={{ flexDirection: 'column' }}>
                                0174 Oslo
                                </Typography>
                                <Typography sx={{ flexDirection: 'column' }}>
                                Tlf : 999 99 999
                                </Typography>
                                <Typography sx={{ flexDirection: 'column', mt: 1 }}>
                                Mon-Thur: 11 - 22
                                </Typography>
                                <Typography sx={{ flexDirection: 'column' }}>
                                Fri-Sun: 11 - 23
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9} lg={6}>
                            <Box sx={{ borderRadius: 1, border: 1, borderColor: '#1D1F2C', padding: 5, width: '20em' }}>
                                <form noValidate autoComplete='off'>
                                    <Typography component="h1" variant="h6" sx={{ letterSpacing: '4px', mb: 1 }}>
                                    <a id="contact-us">CONTACT US:</a>
                                    </Typography>
                                    <Grid item lg={12}>
                                        <TextField
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Name"
                                        variant="outlined"
                                        required />
                                    </Grid>
                                    <Grid item lg={12}>    
                                        <TextField
                                        fullWidth
                                        style={{ marginBottom: 10, color: '#1D1F2C' }}
                                        label="Email"
                                        variant="outlined"
                                        required />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Message"
                                        multiline
                                        variant="outlined"
                                        required />
                                    </Grid>
                                    <Button type="submit" sx={{ backgroundColor: '#1D1F2C', color: 'white', width: '10em' }} variant="text" size="large">Send</Button>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>    
            </Container>
        </footer>
    )
}

export default Footer;