import { useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material";
import NavBarLinks from './NavBarLinks';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Grid } from "@mui/material";
import { Link } from 'react-router-dom'

import '../../style.css';

function MobileNavigation({ shoppingCartItems }) {

    const [ clickedNav, setClickedNav ] = useState(false);

    const theme = createTheme();
    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width: 600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.7rem'
        },
};

    return (
        <nav className='mobile-nav-bar'>
            <Grid container>
            <ThemeProvider theme={theme}>
                <Typography className="nav-header"
                    component="h1"
                    variant="h3"
                    noWrap
                    sx={{ flex: 1, mb: 4, mt: 5, ml: 4, letterSpacing: '6px', fontWeight: 700, color: "#0C4916" }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">PIZZERIA BELLA</Link>
                </Typography>
                </ThemeProvider>
                <MenuIcon className='nav-burger' sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 40 }} 
                onClick={ () => setClickedNav(!clickedNav) }/>
                { clickedNav && <NavBarLinks sx={{ mt: 5, ml: 4, mr: 4 }} /> }
                </Grid>
        </nav>
    ); 
}

export default MobileNavigation;