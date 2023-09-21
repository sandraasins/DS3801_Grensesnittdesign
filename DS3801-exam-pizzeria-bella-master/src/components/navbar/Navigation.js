import { ThemeProvider, Typography } from "@mui/material";
import { Grid, createTheme } from "@mui/material";
import { Link } from 'react-router-dom'

import NavBarLinks from './NavBarLinks';

import '../../style.css';

function Navigation({ shoppingCartItems }) {

    const theme = createTheme();
        theme.typography.h3 = {
            fontSize: '1.2rem',
            '@media (min-width: 576px)': {
                fontSize: '1.5rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '2.4rem'
            },
    };

    return(
        <nav className='nav-bar'>
            <Grid container>
                <ThemeProvider theme={theme}>
                <Typography className="nav-header"
                    component="h1"
                    variant="h2"
                    noWrap
                    sx={{ flex: 1, mb: 4, mt: 5, ml: 4, letterSpacing: '6px', fontWeight: 700, color: "#0C4916" }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">PIZZERIA BELLA</Link>
                </Typography>
                </ThemeProvider>
                <NavBarLinks />
            </Grid>    
        </nav>
    );
}

export default Navigation;