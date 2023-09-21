import React from "react";
import { Container } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import '../../style.css';

function Navbar({ shoppingCartItems }) {
    return (
        <Container className='nav-container' maxWidth='xl'>
            <Navigation />
            <MobileNavigation /> 
        </Container>
    )
}

export default Navbar;
